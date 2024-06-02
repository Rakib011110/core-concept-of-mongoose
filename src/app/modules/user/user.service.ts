import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { Student } from '../student_model';
import { TStudent } from '../students/student-interface';
import { NewUser, TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // creat a use object
  const userData: Partial<TUser> = {};

  // if password is not given , use defoult password
  userData.password = password || (config.default_passowrd as string);

  //   set student role
  userData.role = 'student';

  // find academic Semester
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }
  userData.id = await generateStudentId(admissionSemester);

  // create a user
  const NewUser = await User.create(userData);
  if (Object.keys(NewUser).length) {
    payload.id = NewUser.id;
    payload.user = NewUser._id; // here is reference id
    const newStudent = await Student.create(payload);
    return newStudent;
  }
  //   return NewUser;
};

export const UserService = {
  createStudentIntoDB,
};
