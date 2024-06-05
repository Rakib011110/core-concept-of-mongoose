import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentService } from './student.service';
// import Joi from 'joi';
// import { studentValidationSchema } from './student.validation';
import { z } from 'zod';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendRespon';
import catchAsynce from '../../utils/catchAsynce';

const getAAllStudent = catchAsynce(async (req, res, next) => {
  // console.log(req.query);
  const result = await StudentService.getAllStudentFromDB(req.query);
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

const updateStudent = catchAsynce(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentService.updateStudenFromDB(studentId, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated succesfully',
    data: result,
  });
});
const deleteStudent = catchAsynce(async (req, res, next) => {
  const { studenId } = req.params;
  const result = await StudentService.deleteStudenFromDB(studenId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student is deleted succesfully',
    data: result,
  });
});

export const studentControllers = {
  // creatStudent,
  getAAllStudent,
  getaSingleStudent,
  updateStudent,
  deleteStudent,
};
