/* eslint-disable consistent-return */
import axios from 'axios';

export const getUserInfo = async () => {
  try {
    const response = await axios.get('/users/auth');
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) return err.response?.data;
  }
};
