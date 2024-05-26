import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import { UserValidation } from './user.validation';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // creating schema validation using ZsOD
    //   const zodparsData = UserValidation.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
