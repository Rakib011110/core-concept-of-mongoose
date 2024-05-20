import { Request, Response } from 'express';
import { StudentService } from './student.service';
// import Joi from 'joi';
// import { studentValidationSchema } from './student.validation';
import { z } from 'zod';
import { StudentValidationSchema } from './student.validation';

const creatStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // creating schema validation using ZsOD
    const zodparsData = StudentValidationSchema.parse(studentData);

    // creating schema validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);
    // --------
    // const result = await StudentService.createStudentIntoDB(studentData);
    const result = await StudentService.createStudentIntoDB(studentData);

    // console.log({ error }, { value });
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'somthing is wrong',
    //     error,
    //   });
    // }

    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'somthing is wrong',
      error: error,
    });
  }
};

const getAAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student is retrieve succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'somthing is wrong',
      error: error,
    });
  }
};
const getaSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studenId } = req.params;
    const result = await StudentService.getSingleStudenFromDB(studenId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieve succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'somthing is wrong',
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studenId } = req.params;
    const result = await StudentService.deleteStudenFromDB(studenId);
    res.status(200).json({
      success: true,
      message: 'Student is delete succesfully succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'somthing is wrong',
      error: error,
    });
  }
};

export const studentControllers = {
  creatStudent,
  getAAllStudent,
  getaSingleStudent,
  deleteStudent,
};
