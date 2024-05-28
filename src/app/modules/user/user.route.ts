import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';
import { AnyZodObject } from 'zod';

import { studentValidations } from '../students/student.validation';
import validationRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);

export const UserRoutes = router;
