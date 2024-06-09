import { Router } from 'express';
import { UserRoutes } from '../app/modules/user/user.route';
import { StudentRoutes } from '../app/modules/students/student.router';
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/acdemicSemester.route';
import { AcademicFacultyRoutes } from '../app/modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../app/modules/academicDepartment/academicDepartment.route';
import { FacultyRoutes } from '../app/modules/Faculty/faculty.route';
import { AdminRoutes } from '../app/modules/Admin/admin.route';
import { courseRoutes } from '../app/modules/Courese/course.route';
import { semesterRegistrationRoutes } from '../app/modules/semesterRegistration/semesterRegistration.route';
import { offeredCourseRoutes } from '../app/modules/OfferedCourse/OfferedCourse.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },

  {
    path: '/academic-faculty',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
  {
    path: '/semester-registration',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-course',
    route: offeredCourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

router.use('/users', UserRoutes);
router.use('/student', StudentRoutes);

export default router;
