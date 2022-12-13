import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { PATH } from './api';
import {
  userRouter,
  bookListRouter,
  bookRouter,
  mybookListRouter,
  mybookRouter,
  wishListRouter,
  reportRouter,
  authRouter,
} from './routes';

const PORT = 8080;
const app = express();
dotenv.config();

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  }),
);
app.use(PATH.USER, userRouter);
app.use(PATH.BOOKLIST.ROOT, bookListRouter);
app.use(PATH.BOOK.ROOT, bookRouter);
app.use(PATH.MYBOOKLIST.ROOT, mybookListRouter);
app.use(PATH.MYBOOK.ROOT, mybookRouter);
app.use(PATH.WISHLIST.ROOT, wishListRouter);
app.use(PATH.MYBOOK.ROOT, reportRouter);
app.use('/auth', authRouter);

app.listen(PORT, async () => {
  const response = await mongoose.connect(process.env.MONGODB_KEY as string);
  if (response) console.log('DB Connent');
  console.log(`http://localhost:${PORT}`);
});
