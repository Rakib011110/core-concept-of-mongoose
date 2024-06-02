import { Router } from 'express';
import { UserRoutes } from '../app/modules/user/user.route';
import { StudentRoutes } from '../app/modules/students/student.router';
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/acdemicSemester.route';

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
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

router.use('/users', UserRoutes);
router.use('/student', StudentRoutes);

export default router;