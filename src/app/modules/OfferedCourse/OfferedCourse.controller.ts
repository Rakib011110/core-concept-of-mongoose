import { Request, Response, query } from 'express';
import httpStatus from 'http-status';
import { OfferedCourseServices } from './OfferedCourse.service';
import catchAsynce from '../../utils/catchAsynce';
import sendResponse from '../../utils/sendRespon';
import { OfferedCourse } from './OfferedCourse.model';
import { TOfferedCourse } from './OfferedCourse.interface';

const createOfferedCourse = catchAsynce(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Offered Course is created successfully !',
    data: result,
  });
});

const getAllOfferedCourses = catchAsynce(
  async (req: Request, res: Response) => {
    const query = req.query;

    const result =
      await OfferedCourseServices.getAllOfferedCoursesFromDB(query);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Offered Courses retrieved successfully!',
      data: result,
    });
  },
);

const getSingleOfferedCourses = catchAsynce(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.getAllOfferedCoursesFromDB({
      id,
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourse fetched successfully',
      data: result,
    });
  },
);

const updateOfferedCourse = catchAsynce(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseServices.updateOfferedCourseIntoDB(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OfferedCourse updated successfully',
    data: result,
  });
});

const deleteOfferedCourseFromDB = catchAsynce(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.deleteOfferedCourseFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourse deleted successfully',
      data: result,
    });
  },
);

export const OfferedCourseControllers = {
  createOfferedCourse,
  getAllOfferedCourses,
  getSingleOfferedCourses,
  updateOfferedCourse,
  deleteOfferedCourseFromDB,
};
