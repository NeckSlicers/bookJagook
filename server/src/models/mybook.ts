import { Schema, model } from 'mongoose';

interface IMyBook {
  id: string; // isbn13
  userId: number;
  bookImg: string; // cover
  link: string; // link
  title: string; // title
  author: string; // author
  description: string; // description
  publisher: string; // publisher
  priceStandard: number; // priceStandard
  priceSales: number; // priceSales
  star: number;
  commnet: string;
  revier: string;
}

const myBookSchema = new Schema<IMyBook>({});

const Mybook = model<IMyBook>('Mybooks', myBookSchema);

export { Mybook, IMyBook };
