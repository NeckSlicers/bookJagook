const mongoose = require('mongoose');
// 비밀번호 암호화 - 참조: https://juni-official.tistory.com/161
const bcrypt = require('bcrypt');
const saltRounds = 10; // salt를 이용해서 비밀번호를 암호화 - 10자리로
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    maxlength: 25,
    required: true,
  },
  email: {
    // trim: 이메일의 계정 아이디 부분에서 공백 제거
    // unique: 중복된 이메일 주소 사용 막기
    type: String,
    trim: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  role: {
    // 어떤 유형의 사용자인지 숫자로 구분
    // 기본값을 일반 유저로
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// * 비밀번호 암호화하기 - bcrypt 사용
// pre: 몽고디비 내장 메서드 - server.js의 save 메서드에서 요청 데이터를 저장하기 전에
// 콜백함수를 실행하고 나서 다음 코드 실행
userSchema.pre('save', function (next) {
  const user = this;
  console.log(user);
  // 조건문: 비밀번호를 변경한 경우에만 비밀번호 해싱. 이름, 이메일 변경 시 아래 코드 실행 x
  if (user.isModified('password')) {
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// * 비밀번호 일치 여부 조회
userSchema.methods.comparePassword = function (plainPassword, cb) {
  // (평문 비밀번호, 콜백함수)
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

// * 토큰 생성
// 에러: throw new Error('Expected "' + parameterName + '" to be a plain object.');
// 대응: user._id.toHexString()
// 기존: user._id

userSchema.methods.generateToken = function (cb) {
  // json web token을 이용해서 토큰 생성하기
  const user = this;
  console.log(user);
  const token = jwt.sign(user._id.toHexString(), 'secretToken'); // user._id 와 'secretToken' 을 합쳐서 jwt 토큰을 생성함.
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

// * 가져온 토큰 복호화 하기
userSchema.statics.findByToken = function (token, cb) {
  const user = this;
  console.log(user);
  // 토큰 디코딩 - json 웹 토큰 사용법 참고
  jwt.verify(token, 'secretToken', function (err, decoded) {
    // 유저의 아이디를 이용해서 유저를 찾은 다음,
    // 클라이언트에서 가져온 token과 db에 보관된 토큰이 일치하는지 확인.
    // findOne: 몽고디비 메서드
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
