import httpStatus from 'http-status';
import { AppError } from '../../Errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { query } from 'express';
import { RegistrationStatus } from './semesterRegistration.constant';

const createSemesterRegistrationIntoDB = async (
  payLoad: TSemesterRegistration,
) => {
  /**
   * Step1: Check if the semester is exist
   * Step2: Check if the requested registered semester is exists
   * Step3: If the requested semester registration is ended, we will not update anything
   * Step4: If the requested semester registration is 'UPCOMING', we will let update everything.
   * Step5: If the requested semester registration is 'ONGOING', we will not update anything  except status to 'ENDED'
   * Step6: If the requested semester registration is 'ENDED' , we will not update anything
   *
   * UPCOMING --> ONGOING --> ENDED
   *
   */

  const academicSemester = payLoad?.academicSemester;

  // check if there any registered semester that is already "UPCOMING"| "ONGOING"
  const isThereANyUpcomingOrOngoingSemester =
    await SemesterRegistration.findOne({
      $or: [
        { status: RegistrationStatus.UPCOMING },
        { status: RegistrationStatus.ONGOING },
      ],
    });

  if (isThereANyUpcomingOrOngoingSemester) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `There is Already a ${isThereANyUpcomingOrOngoingSemester.status} Register Semester`,
    );
  }

  // check if semester is Exist
  const isAcademicSemsterExist =
    await AcademicSemester.findById(academicSemester);
  if (!isAcademicSemsterExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'academic Semester not found');
  }

  // check if semester is already register

  const isSemesterRegistrationExist = await SemesterRegistration.findOne({
    academicSemester: academicSemester,
  });

  if (isSemesterRegistrationExist) {
    throw new AppError(httpStatus.CONFLICT, 'this  Semester is already exist');
  }

  const result = await SemesterRegistration.create(payLoad);
  return result;
};

const getAllSemesterRegistrationsFromDB = async (
  query: Record<string, unknown>,
) => {
  const semesterRegistrationQuery = new QueryBuilder(
    SemesterRegistration.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await semesterRegistrationQuery.modelQuery;
  return result;
};

const getSingleSemesterRegistrationsFromDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);
  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  // check if the Requested register Semester is Exists
  const isSemesterRegistrationExists = await SemesterRegistration.findById(id);
  const requestedStatus = payload?.status;
  if (!isSemesterRegistrationExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'This semester is not found !');
  }

  // if the requested semester regestration is Ended, we will not update
  const currentSemesterStatus = isSemesterRegistrationExists?.status;
  if (currentSemesterStatus === RegistrationStatus.ENDED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `This Semester is already ${currentSemesterStatus}`,
    );
  }

  // * UPCOMING --> ONGOING --> ENDED

  if (
    currentSemesterStatus === RegistrationStatus.UPCOMING &&
    requestedStatus === RegistrationStatus.ENDED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not derectly change stutuas from ${currentSemesterStatus} to ${requestedStatus}`,
    );
  }
  if (
    currentSemesterStatus === RegistrationStatus.ONGOING &&
    requestedStatus === RegistrationStatus.UPCOMING
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not derectly change stutuas from ${currentSemesterStatus} to ${requestedStatus}`,
    );
  }

  const result = await SemesterRegistration.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSemesterRegistrationFromDB = async () => {};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationIntoDB,
  deleteSemesterRegistrationFromDB,
};
