import express from 'express';
import * as studentController from '../controllers/student.controller.js';

const router = express.Router();

router.get(
  '/students',
  studentController.findAll,
);
router.get(
  '/students/:id',
  studentController.findById,
);
router.post(
  '/students',
  studentController.create,
);
router.put(
  '/students/:id',
  studentController.update,
);
router.delete(
  '/students/:id',
  studentController.remove,
);

export default router;
