import { Student } from '../student_model';
import { TStudent } from './student-interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('user Already exists!');
  }
  const result = await Student.create(studentData); // built in static method

  return result;

  // const student = new Student(studentData); // create un instance
  // if (await student.isUserExist(studentData.id)) {
  //   throw new Error('user is already Exist');
  // }
  // const result = await student.save(); // built in instance method
  // return result;
};
// ------

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudenFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);

  return result;
};
const deleteStudenFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudenFromDB,
  deleteStudenFromDB,
};
