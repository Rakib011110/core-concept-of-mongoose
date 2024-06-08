import { Request, Response } from 'express';
import catchAsynce from '../../utils/catchAsynce';
import sendResponse from '../../utils/sendRespon';
import httpStatus from 'http-status';
import { SemesterRegistrationService } from './semesterRegistration.service';

const createSemesterRegistration = catchAsynce(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationService.createSemesterRegistrationIntoDB(
        req.body,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin is created succesfully',
      data: result,
    });
  },
);

const getAllSemesterRegistrations = catchAsynce(
  async (req: Request, res: Response) => {
    const rustul = '';

    //   sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: 'Admin is created succesfully',
    //     data: result,
    //   });
  },
);
const getSingleSemesterRegistration = catchAsynce(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const rustul = '';

    //   sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: 'Admin is created succesfully',
    //     data: result,
    //   });
  },
);
const updateSemesterRegistration = catchAsynce(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const rustul = '';

    //   sendResponse(res, {
    //     statusCode: httpStatus.OK,
    //     success: true,
    //     message: 'Admin is created succesfully',
    //     data: result,
    //   });
  },
);
const deleteSemesterRegistration = catchAsynce(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = '';
    // await SemesterRegistrationService.deleteSemesterRegistrationFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is updated successfully',
      data: result,
    });
  },
);

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
};
