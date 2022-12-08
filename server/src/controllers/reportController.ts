import { Request, Response } from 'express';
import { Report } from '../models';

const createReport = async (req: Request, res: Response) => {
  const result = { ...req.body, userId: 1 };
  try {
    const reportDocument = new Report(result);
    await reportDocument.save();
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const updateReport = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const { report } = req.body;
  try {
    await Report.findOneAndUpdate({ id: bookId }, { report });
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const deleteReport = async (req: Request, res: Response) => {
  const { bookId } = req.params;
  try {
    await Report.findOneAndDelete({ id: bookId });
    return res.status(200).send('success');
  } catch {
    return res.status(404).send('fail');
  }
};

const reportController = {
  createReport,
  updateReport,
  deleteReport,
};

export { reportController };
