import express from 'express';
import { studentControllers } from './student_controller';
import validationRequest from '../../middleware/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// will call controller

router.get('/:studenId', studentControllers.getaSingleStudent);
router.delete('/:studenId', studentControllers.deleteStudent);
router.patch(
  '/:studentId',
  validationRequest(updateStudentValidationSchema),
  studentControllers.updateStudent,
);

router.get('/', studentControllers.getAAllStudent);

export const StudentRoutes = router;
