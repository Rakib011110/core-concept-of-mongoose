import { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.service';
// import Joi from 'joi';
// import { studentValidationSchema } from './student.validation';
import { z } from 'zod';

const getAAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student is retrieve succesfully',
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
    res.status(200).json({
      success: true,
      message: 'Student is retrieve succesfully',
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
    res.status(200).json({
      success: true,
      message: 'Student is delete succesfully succesfully',
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
