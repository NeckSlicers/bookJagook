import express from 'express';
import { PATH } from '../api';
import { reportController } from '../controllers';

const router = express();

router.post(PATH.ROOT, reportController.createReport);
router.patch(PATH.ROOT, reportController.updateReport);
router.delete(PATH.ROOT, reportController.deleteReport);

export { router as reportRouter };
