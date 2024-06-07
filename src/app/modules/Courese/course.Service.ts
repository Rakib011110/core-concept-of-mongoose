import QueryBuilder from '../../builder/QueryBuilder';
import { CourseSearchableFields } from './course.constant';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (PayLoad: TCourse) => {
  const result = await Course.create(PayLoad);
  return result;
};

const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourses.course'),
    query,
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};
const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate(
    'preRequisiteCourses.course',
  );
  return result;
};
const updateCourseIntoDB = async (id: string, payLoad: Partial<TCourse>) => {
  const { preRequisiteCourses, ...courseRemainingData } = payLoad;

  const updateBasicCourseInfo = await Course.findByIdAndUpdate(
    id,
    courseRemainingData,
    {
      new: true,
      runValidators: true,
    },
  );

  //  check if there is any pre requisite course to update

  if (preRequisiteCourses && preRequisiteCourses.length > 0) {
    // / filter out the deleted fields

    const deletePreRequisites = preRequisiteCourses
      .filter((el) => el.course && el.isDeleted)
      .map((el) => el.course);
    const deletePreRequisitCourses = await Course.findByIdAndUpdate(
      id,

      {
        $pull: {
          preRequisiteCourses: { course: { $in: deletePreRequisites } },
        },
      },
    );
  }

  // / filter out the new course fields
  const newPreRequisites = () => {};

  return updateBasicCourseInfo;
};

const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  updateCourseIntoDB,
  deleteCourseFromDB,
};
