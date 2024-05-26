import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

const shenabahini = (req: Request, res: Response, next: NextFunction) => {
  console.log('you can call me army');
};

router.post('/create-student', shenabahini, userControllers.createStudent);

export const UserRoutes = router;
