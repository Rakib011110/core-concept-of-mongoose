import { Request, Response } from 'express';
import { UserService } from './user.service';
import { UserValidation } from './user.validation';

const creatStudent = async (req: Request, res: Response) => {
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'somthing is wrong',
      error: error,
    });
  }
};

export const userControllers = {
  creatStudent,
};
