import express from 'express';
import { PATH } from '../api';
import { wishiListController } from '../controllers';

const router = express();

router.get(PATH.ROOT, wishiListController.getWishList);
router.post(PATH.ROOT, wishiListController.createWishList);
router.delete(PATH.WISHLIST.BOOKID, wishiListController.deleteWishList);

export { router as wishListRouter };
