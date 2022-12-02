import { Request, Response } from 'express';

const getUser = (req: Request, res: Response) => {
  console.log(res);
};

const userController = {
  getUser,
};

export { userController };
