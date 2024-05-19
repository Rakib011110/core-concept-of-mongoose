import { Student } from '../student_model';
import { TStudent } from './student-interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); // built in static method

  const student = new Student(studentData);
  const result = await student.save(); // built in instance method

  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudenFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudenFromDB,
};
