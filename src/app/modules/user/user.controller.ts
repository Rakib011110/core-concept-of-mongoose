import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import { UserValidation } from './user.validation';
import sendResponse from '../../utils/sendRespon';
import httpStatus from 'http-status';
import catchAsynce from '../../utils/catchAsynce';

const createStudent = catchAsynce(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  //   const zodparsData = UserValidation.parse(studentData);
  const result = await UserService.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student is created succesfully',
    data: result,
  });
});

const createFaculty = catchAsynce(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserService.createFacultyIntoDB(password, facultyData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

const createAdmin = catchAsynce(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserService.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
  createFaculty,
  createAdmin,
};
