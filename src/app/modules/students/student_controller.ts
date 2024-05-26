import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentService } from './student.service';
// import Joi from 'joi';
// import { studentValidationSchema } from './student.validation';
import { z } from 'zod';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendRespon';
import catchAsynce from '../../utils/catchAsynce';

const getAAllStudent = catchAsynce(async (req, res, next) => {
  const result = await StudentService.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student is retrieved succesfully',
    data: result,
  });
});

const getaSingleStudent: RequestHandler = catchAsynce(
  async (req, res, next) => {
    const { studenId } = req.params;
    const result = await StudentService.getSingleStudenFromDB(studenId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student is retrieved succesfully',
      data: result,
    });
  },
);

const deleteStudent = catchAsynce(async (req, res, next) => {
  const { studenId } = req.params;
  const result = await StudentService.deleteStudenFromDB(studenId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student is retrieved succesfully',
    data: result,
  });
});

export const studentControllers = {
  // creatStudent,
  getAAllStudent,
  getaSingleStudent,
  deleteStudent,
};
