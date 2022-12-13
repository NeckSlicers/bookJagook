import express from 'express';
// import { PATH } from '../api';
import { accessToken, callback } from '../controllers';

const router = express();

router.post('/accesstoken', accessToken);

export { router as authRouter };
