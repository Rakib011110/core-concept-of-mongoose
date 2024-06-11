import httpStatus from 'http-status';
import config from '../../config';
import catchAsynce from '../../utils/catchAsynce';
import sendResponse from '../../utils/sendRespon';
import { AuthServices } from './auth.service';

const loginUser = catchAsynce(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: result,
  });
});

const changePassword = catchAsynce(async (req, res) => {
  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'Password is updated succesfully!',
  //     data: result,
  //   });
});

const refreshToken = catchAsynce(async (req, res) => {
  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'Access token is retrieved succesfully!',
  //     data: result,
  //   });
});

export const AuthControllers = {
  loginUser,
  changePassword,
  refreshToken,
};
