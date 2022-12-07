import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const instance = axios.create({
  baseURL: process.env.BOOK_LIST_BASE_URL,
  params: {
    TTBKey: process.env.SECRET_KEY,
    SearchTarget: 'Book',
    SubSearchTarget: 'Book',
    Output: 'JS',
    Version: '20131101',
  },
});

export { instance as axios };
