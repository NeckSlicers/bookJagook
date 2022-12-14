/* eslint-disable consistent-return */
import axios from 'axios';

/** 나의서재 목록 GET 요청 함수 */
export const getMybooks = async () => {
  try {
    const response = await axios.get('/mybook');
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};
