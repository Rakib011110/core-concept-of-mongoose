import express from 'express';
import { studentControllers } from './student_controller';

const router = express.Router();

// will call controller

router.get('/:studenId', studentControllers.getaSingleStudent);
router.delete('/:studenId', studentControllers.deleteStudent);

export const StudentRoutes = router;
