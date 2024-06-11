import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import config from '../../config';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { AppError } from '../../Errors/AppError';

const loginUser = async (payload: TLoginUser) => {
  console.log(payload);

  // cheking if the user is the exists

  if (!User.isUserExistsByCustomID) {
    throw new AppError(httpStatus.NOT_FOUND, 'this user is not found');
  }

  //   //cheking if the use os already  deleted
  //   const isDeleted = isUserExist?.isDeleted;
  //   if (isDeleted) {
  //     throw new AppError(httpStatus.NOT_FOUND, 'this user is Deleted');
  //   }
  //   const userStatus = isUserExist?.status;
  //   if (userStatus === 'blocked') {
  //     throw new AppError(httpStatus.NOT_FOUND, 'this user is blocked');
  //   }
  //   // checking if the password is correct
  //   const isPasswordMatched = await bcrypt.compare(
  //     payload.password,
  //     isUserExist.password,
  //   );
  //   console.log(isPasswordMatched);
};

const changePassword = async (payload: {
  oldPassword: string;
  newPassword: string;
}) => {};

const refreshToken = async (token: string) => {};

export const AuthServices = {
  loginUser,
  changePassword,
  refreshToken,
};
