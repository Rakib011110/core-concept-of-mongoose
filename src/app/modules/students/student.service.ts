import { Student } from '../student_model';
import { TStudent } from './student-interface';

const getAllStudentFromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate('academicDepartment')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudenFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate('academicDepartment')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

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
