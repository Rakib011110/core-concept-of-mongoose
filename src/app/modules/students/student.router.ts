import express from 'express';
import { studentControllers } from './student_controller';

const router = express.Router();

// will call controller
router.post('/create-student', studentControllers.creatStudent);
router.get('/', studentControllers.getAAllStudent);

router.get('/:studenId', studentControllers.getaSingleStudent);

export const StudentRoutes = router;
