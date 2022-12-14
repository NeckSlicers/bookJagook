/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
// import { PATH } from '../api';
import { authController } from '../controllers';

const router = express();

router.post('/', authController.getKakaoUserInfo);

export { router as authRouter };
