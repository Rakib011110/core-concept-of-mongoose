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
export const userControllers = {
  createStudent,
};
