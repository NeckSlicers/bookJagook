import exprss from 'express';
import { PATH } from '../api';
import { bookController } from '../controllers';

const router = exprss();

router.get(PATH.BOOK.BOOKID, bookController.getBook);
router.post(PATH.BOOK.REVIEW, bookController.createBook);
router.patch(PATH.BOOK.REVIEW, bookController.updateBook);
router.delete(PATH.BOOK.REVIEW, bookController.deleteBook);

export { router as bookRouter };
