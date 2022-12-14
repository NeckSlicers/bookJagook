const { User } = require('../models/User');

const auth = (req, res, next) => {
  // 인증 관련 처리를 하는 함수
  // server.js auth페이지 get요청의 응답에서 미들웨어로 사용함.

  // 1. 클라이언트 쿠키에서 토큰을 가져온다.
  const token = req.cookies.x_auth;

  // 2. 토큰을 복호화 한 후 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    console.log(user); // TODO: user 값 null로 들어오는 중..
    // early return으로 예외처리 선행: 에러핸들링, 유저가 없는 경우의 응답
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    // server.js에서 현재의 미들웨어 auth 함수를 실행시키고
    // 아래 req.token, req.user의 값으로 토큰과 유저정보를 사용하기 위해 할당시킨다.
    req.token = token;
    req.user = user;
    next();
  });

  // 3. 있는 유저라면 인증 통과, 없는 유저라면 인증 불허.
};

module.exports = { auth };
