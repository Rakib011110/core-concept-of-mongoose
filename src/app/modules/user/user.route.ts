import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

// will call controller
router.post('/create-student', userControllers.creatStudent);

export const UserRoutes = router;
