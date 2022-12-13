import { Request, Response } from 'express';
import { BookItem } from '../types';
import { WishList } from '../models';

interface IWishItem extends BookItem {
  userId: number;
}

const getWishList = async (req: Request, res: Response) => {
  try {
    const data = await WishList.find({ userId: 1 });
    const result = data.map((item: IWishItem) => ({
      id: item.id,
      userId: item.userId,
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
};

const createWishList = async (req: Request, res: Response) => {
  const result: IWishItem = { ...req.body, userId: 1 };
  try {
    const WishListDocument = new WishList(result);
    await WishListDocument.save();
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const deleteWishList = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    await WishList.findOneAndDelete({ id: bookId });
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const wishiListController = {
  getWishList,
  createWishList,
  deleteWishList,
};

export { wishiListController };
