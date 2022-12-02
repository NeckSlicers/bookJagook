import express from 'express';
import { userController } from '../controllers';

/* 컨트롤러 모듈화 */

const router = express();

router.get('/', userController.getUser);
router.post('/', userController.createUser);

export { router as userRouter };
