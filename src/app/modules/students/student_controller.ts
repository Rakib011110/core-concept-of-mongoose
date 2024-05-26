import { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.service';
// import Joi from 'joi';
// import { studentValidationSchema } from './student.validation';
import { z } from 'zod';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendRespon';

const getAAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student is retrieved succesfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getaSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studenId } = req.params;
    const result = await StudentService.getSingleStudenFromDB(studenId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student is retrieved succesfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studenId } = req.params;
    const result = await StudentService.deleteStudenFromDB(studenId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student is retrieved succesfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentControllers = {
  // creatStudent,
  getAAllStudent,
  getaSingleStudent,
  deleteStudent,
};
