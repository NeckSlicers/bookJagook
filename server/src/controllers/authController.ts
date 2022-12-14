/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { Request, Response } from 'express';

const getKakaoUserInfo = async (req: Request, res: Response) => {
  const result = await axios.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      Authorization: `Bearer ${req.body.access_token}`,
      contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
  return console.log(result.data);
  //   .then((result) => console.log(result));
};

const authController = {
  getKakaoUserInfo,
};

export { authController };
