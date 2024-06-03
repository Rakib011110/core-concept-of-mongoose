import { Request, Response } from 'express';
import { NextFunction } from 'express';

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.stutusCode || 500;
  const message = error.message || 'somthing is wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: error,
  });
};
export default globalErrorHandler;
