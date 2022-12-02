import exrpess from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { PATH } from './api';
import { userRouter } from './routes';

const PORT = 8080;
const app = exrpess();
dotenv.config();

app.use(morgan('tiny'));
app.use(exrpess.urlencoded({ extended: false }));
app.use(exrpess.json());
app.use(PATH.USER, userRouter);

app.listen(PORT, async () => {
  const response = await mongoose.connect(process.env.MOGODB_KEY as string);
  if (response) console.log('DB Connent');
  console.log(`http://localhost:${PORT}`);
});
