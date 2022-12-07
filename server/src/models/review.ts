import { Schema, model } from 'mongoose';

interface IReview {
  bookId: string;
  nickName: string;
  comment: string;
  star: number;
}

const reviewSchema = new Schema<IReview>({
  bookId: String,
  nickName: String,
  comment: String,
  star: Number,
});

const Review = model<IReview>('Reviews', reviewSchema);

export { Review, IReview };
