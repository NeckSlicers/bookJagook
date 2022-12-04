import express from 'express';
import { PATH } from '../api';
import { bookListController } from '../controllers';

const router = express();

router.get(PATH.ROOT, bookListController.getBookList);

export { router as bookListRouter };
