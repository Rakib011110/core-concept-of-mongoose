import { Student } from '../student_model';
import { TStudent } from './student-interface';

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
  // createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudenFromDB,
  deleteStudenFromDB,
};
