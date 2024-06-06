import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';
import { AnyZodObject } from 'zod';

import { studentValidations } from '../students/student.validation';
import validationRequest from '../../middleware/validateRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-faculty',
  validationRequest(createFacultyValidationSchema),
  userControllers.createFaculty,
);

router.post(
  '/create-admin',
  validationRequest(createAdminValidationSchema),
  userControllers.createAdmin,
);

export const UserRoutes = router;
