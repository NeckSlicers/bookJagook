import express from 'express';
import { PATH } from '../api';
import { reportController } from '../controllers';

const router = express();

router.post(PATH.MYBOOK.REPORT, reportController.createReport);
router.patch(PATH.MYBOOK.REPORT, reportController.updateReport);
router.delete(PATH.MYBOOK.REPORT, reportController.deleteReport);

export { router as reportRouter };
