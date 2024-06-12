import express, { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

import { studentValidations } from '../students/student.validation';
import validationRequest from '../../middleware/validateRequest';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validationRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  validationRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validationRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
