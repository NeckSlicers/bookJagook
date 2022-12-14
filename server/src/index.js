const express = require('express');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
// 몽고디비 연결
const mongoose = require('mongoose');
dotenv.config();

const { User } = require('./models/User');
const { Wishlist } = require('./models/Wishlist');
const { Mybook } = require('./models/Mybook');
const { Report } = require('./models/Report');
const { Review } = require('./models/Review');

// 인증 미들웨어
const { auth } = require('./middleware/auth');

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 토큰을 쿠키에 담기 위해 쿠키파서 사용. 참고: https://velog.io/@heony/cookie-parser
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI) // promise를 리턴하므로 then 체이닝 가능
  .then(() => {
    console.log('mongoDB 연결됨');
  });
app.use('/uploads', express.static('uploads')); // 클라이언트에서 서버의 정적 파일에 접근할 수 있도록

// * 2.1 회원가입 요청의 응답
app.post('/users/signup', (req, res) => {
  // 회원가입시 클라이언트 단에서 입력된 정보를 가져와 데이터베이스에 저장한다.
  // req.body에 json 객체로 키-값 이 들어가있다.
  const user = new User(req.body); // 정의한 모델을 불러와 요청 안의 데이터로 새 인스턴스 생성
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
  // save: 몽고디비의 메서드 - 콜백함수로 에러, 저장된 데이터를 매개변수로 받는다.
  // userInfo = ( user = new User(req.body) )
});

// * 2.2 로그인 요청의 응답
// 1. 로그인 요청으로 온 이메일 주소가 데이터베이스에 존재하는지 확인한다.
// 2. 이메일 주소가 데이터베이스에 있다면 비밀번호의 일치 여부를 확인한다.
// 3. 이메일과 비밀번호가 모두 일치하면 토큰을 생성한다.
app.post('/users/signin', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '가입되지 않은 사용자입니다. 이메일 주소를 확인해주세요',
      });
    }
    // 요청된 이메일이 데이터베이스에 존재할 경우 비밀번호 일치 여부 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });
      }

      // 비밀번호가 일치하는 경우 - 토큰을 생성한다.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰을 저장하는 곳은 쿠키, 세션스토리지, 로컬스토리지 다양함. 여기서는 쿠키에 저장해본다.
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });

  // * 2.3 인증기능 라우터 - 인증페이지 요청 응답
  // role이 1이면 관리자, 0이면 일반 유저인 경우로 한다.
  app.get('/users/auth', auth, (req, res) => {
    // './middleware/auth.js'의 auth 함수에서 코드가 종료되면서 next() 호출하므로
    // 미들웨어를 실행시키고 다시 나머지 코드를 실행해서 응답을 보내줌.
    // 미들웨어에서 예외처리를 해두었기 때문에 next()후 여기로 돌아온다면
    // 인증이 성공한 경우이다.
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      username: req.user.name,
      email: req.user.email,
    });
  });

  // * 2.4 로그아웃 라우터 - 로그아웃 하는 사용자의 토큰을 지워준다
  // db에서 로그아웃 하는 사용자의 토큰을 지우면 클라이언트의 쿠키에서 가져온 토큰과
  // db의 토큰을 비교 시 맞지 않기 때문에 로그인 상태를 유지할 수 없음.
  app.get('/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    });
  });
});

// * 3. 위시리스트 핸들러
app.get('/wishlist', auth, async (req, res) => {
  try {
    const data = await Wishlist.find({ username });
    const result = data.map(item => ({
      id: item.id,
      username: item.username,
      bookImg: item.bookImg,
      link: item.link,
      title: item.title,
      author: item.author,
      description: item.description,
      publisher: item.publisher,
      priceStandard: item.priceStandard,
      priceSales: item.priceSales,
    }));
    return res.status(200).json(result);
  } catch {
    return res.status(404).send('fail');
  }
});

app.post('/wishlist', auth, async (req, res) => {
  const result = { ...req.body, username };
  try {
    const WishlistDocument = new Wishlist(result);
    await WishlistDocument.save();
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
});

app.delete('/wishlist', auth, async (req, res) => {
  const { bookId } = req.params;
  try {
    await Wishlist.findOneAndDelete({ id: bookId });
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버 실행중`);
});
