import { Request, Response } from 'express';
import { StudentService } from './student.service';

const creatStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call service func to send this data
    const result = await StudentService.createStudentIntoDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
  } catch (err) {
    console.log(err);
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
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  creatStudent,
  getAAllStudent,
  getaSingleStudent,
};
