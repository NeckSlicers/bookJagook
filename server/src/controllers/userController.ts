import { Request, Response } from 'express';
import { IUser, User } from '../models';

/* 데이터 성공 예외처리 블록 */

const getUser = (req: Request, res: Response) => {
  console.log(res);
  return res.send('유저');
};

const createUser = async (req: Request, res: Response) => {
  const userData: IUser = { ...req.body };
  const userDocument = new User(userData);
  try {
    await userDocument.save();
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const userController = {
  getUser,
  createUser,
};

export { userController };
