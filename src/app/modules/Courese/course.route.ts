import express from 'express';
import validationRequest from '../../middleware/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';

const router = express.Router();

router.post(
  '/create-course',
  validationRequest(CourseValidations.creatCoursevalidationSchema),
  CourseControllers.createCourse,
);
router.get('/:id', CourseControllers.getSingleCourse);
router.delete('/:id', CourseControllers.deleteCourse);

// router.patch(
//   '/:id',
//   validationRequest(

//   ),
//   CourseControllers,
// );
router.get('/', CourseControllers.getAllCourses);

export const courseRoutes = router;