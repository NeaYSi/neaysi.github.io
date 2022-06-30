import express from 'express';
import * as teacherController from '../controllers/teacher.controller.js';

const router = express.Router();

router.get(
  '/teachers',
  teacherController.findAll,
);
router.get(
  '/teachers/:id',
  teacherController.findById,
);
router.post(
  '/teachers',
  teacherController.create,
);
router.put(
  '/teachers/:id',
  teacherController.update,
);
router.delete(
  '/teachers/:id',
  teacherController.remove,
);

export default router;
