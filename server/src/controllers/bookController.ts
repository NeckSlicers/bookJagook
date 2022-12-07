import { Request, Response } from 'express';
import { axios, REQUEST } from '../api';
import { AladinBook, BookItem } from '../types';
import { Review } from '../models';

interface IBookItem extends BookItem {
  review: {
    nickName: string;
    commnet: string;
    star: number;
  }[];
}

const getBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    const { data } = await axios.get(REQUEST.SEARCH_BOOK(bookId));
    const newItem = data.item.map((item: AladinBook) => ({
      id: item.isbn13,
      bookImg: item.cover,
      link: item.link,
      title: item.title,
      author: item.author,
      description: item.description,
      publisher: item.publisher,
      priceStandard: item.priceStandard,
      priceSales: item.priceSales,
    }));

    const reviewItems = (await Review.find({ bookId })).map((item) => ({
      nickName: item.nickName,
      comment: item.comment,
      star: item.star,
    }));

    const result: IBookItem = {
      ...newItem[0],
      review: reviewItems,
    };

    return res.status(200).json(result);
  } catch {
    return res.status(404).send('fail');
  }
};

const createBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const { comment, star } = req.body;
  const reviewData = { comment, star, bookId, nickName: 'YHJ96' };
  const reviewDocument = new Review(reviewData);
  try {
    const isCheck = await Review.findOne({ nickName: 'YHJ96' });
    if (isCheck) return res.status(404).send('이미 리뷰를 작성하였습니다.');
    await reviewDocument.save();
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const updateBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    await Review.findOneAndUpdate({ bookId }, { ...req.body });
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const deleteBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    await Review.findOneAndDelete({ bookId });
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const bookController = {
  getBook,
  createBook,
  updateBook,
  deleteBook,
};

export { bookController };
