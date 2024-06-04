import httpStatus from 'http-status';
import { AppError } from '../../Errors/AppError';
import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { Student } from '../student_model';
import { TStudent } from '../students/student-interface';
import { NewUser, TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import mongoose from 'mongoose';

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
    throw new AppError(httpStatus.NOT_FOUND, 'Admission semester not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // set a genaratedId
    userData.id = await generateStudentId(admissionSemester);

    // create a user (transaction-1)
    const NewUser = await User.create([userData], { session }); // now array

    // create a students
    if (!NewUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild too create User');
    } else {
    }

    // set id , _id as user
    payload.id = NewUser[0].id;
    payload.user = NewUser[0]._id; // here is reference id

    // create a students (transaction-2)
    const newStudent = await Student.create([payload], { session });

    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild too create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('faild to delete user');
  }
};

export const UserService = {
  createStudentIntoDB,
};
