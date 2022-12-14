/* eslint-disable consistent-return */
import axios from 'axios';

/** 회원가입 요청 핸들러 함수 */
export const handleSignup = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post('/users/signup', data);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

/**
 * 로그인 요청 핸들러 함수 */
export const handleSignin = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post('/users/signin', data);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return err.response?.data;
    }
  }
};

/** 로그아웃 요청 핸들러 함수 */

export const handleLogout = async () => {
  try {
    const response = await axios.get('/users/logout');
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) return err.response?.data;
  }
};
