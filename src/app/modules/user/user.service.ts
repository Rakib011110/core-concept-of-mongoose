import config from '../../config';
import { Student } from '../student_model';
import { TStudent } from '../students/student-interface';
import { NewUser, TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // creat a use object
  const userData: Partial<TUser> = {};

  // if password is not given , use defoult password
  userData.password = password || (config.default_passowrd as string);

  //   set student role
  userData.role = 'student';

  // set manually generated
  userData.id = '2030100001';

  // create a user
  const NewUser = await User.create(userData);

  if (Object.keys(NewUser).length) {
    studentData.id = NewUser.id;
    studentData.user = NewUser._id; // here is reference id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  //   return NewUser;
};

export const UserService = {
  createStudentIntoDB,
};
