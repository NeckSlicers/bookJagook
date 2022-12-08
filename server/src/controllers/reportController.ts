import { Request, Response } from 'express';

const createReport = async (req: Request, res: Response) => res.send('종료');
const updateReport = async (req: Request, res: Response) => res.send('종료');
const deleteReport = async (req: Request, res: Response) => res.send('종료');

const reportController = {
  createReport,
  updateReport,
  deleteReport,
};

export { reportController };
