import mongoose from 'mongoose';
import { Student } from '../student_model';
import { TStudent } from './student-interface';
import { AppError } from '../../Errors/AppError';
import { User } from '../user/user.model';
import httpStatus from 'http-status';

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query }; // copying req.query object so that we can mutate the copy object
  // console.log('base query', query);

  const queryObject = { ...query }; // copy

  const studentSearchableFields = ['email', 'name.firstName', 'presentAddress'];
  let searchTerm = ''; // SET DEFAULT VALUE

  // IF searchTerm  IS GIVEN SET IT
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Student.find({
    $or: studentSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // filtereing
  const excludeFields = ['searchTerm', 'sort', 'limit'];

  excludeFields.forEach((el) => delete queryObject[el]);
  console.log({ query, queryObject });

  const filterQuery = searchQuery
    .find(queryObject)
    .populate('admissionSemester')
    .populate('academicDepartment')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  // SORTING FUNCTIONALITY:
  let sort = '-createdAt'; // SET DEFAULT VALUE
  // IF sort  IS GIVEN SET IT
  if (query.sort) {
    sort = query.sort as string;
  }
  const sortQuery = filterQuery.sort(sort);

  let limit = 1;
  if (query.limit) {
    limit = Number(query.limit);
  }
  const limitQuery = await sortQuery.limit(limit);

  return limitQuery;
};

const getSingleStudenFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.findOne({ id })
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

const updateStudenFromDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(modifiedUpdatedData);
  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteStudenFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },

      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete student');
    }

    const deleteUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },

      { new: true, session },
    );

    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete student');
    }
    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('faild to create student');
  }
};

export const StudentService = {
  // createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudenFromDB,
  updateStudenFromDB,
  deleteStudenFromDB,
};
