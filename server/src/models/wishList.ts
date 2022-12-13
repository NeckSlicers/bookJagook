import { Schema, model } from 'mongoose';

interface IWishList {
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
}

const wishListSchema = new Schema<IWishList>({
  id: String,
  userId: Number,
  bookImg: String,
  link: String,
  title: String,
  author: String,
  description: String,
  publisher: String,
  priceStandard: Number,
  priceSales: Number,
});

const WishList = model<IWishList>('WishLists', wishListSchema);

export { WishList, IWishList };
