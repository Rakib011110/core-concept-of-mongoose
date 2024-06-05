import { ErrorRequestHandler, Request, Response } from 'express';
import { NextFunction } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../InterFace/error';
import config from '../config';
import { handleZodError } from '../Errors/handleZodError';
import handleValidationError from '../Errors/handleValidationError';
import { handleCastError } from '../Errors/handleCastError';
import handleDuplicateError from '../Errors/handleDublicateError';
import { AppError } from '../Errors/AppError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // setting default values
  let statusCode = 500;
  // let message = error.message || 'somthing is wrong';
  let message = 'somthing is wrong';

  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'somthing is wrong',
    },
  ];

  if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    // console.log(simplifiedError);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
    // message = 'you can call zod error';
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error?.code === 11000) {
    const simplifiedError = handleDuplicateError(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (error instanceof AppError) {
    statusCode = error?.stutusCode;
    message = error?.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error?.message;
    errorSources = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }

  // ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error,
    stack: config.NODE_ENV === 'developement' ? error?.stack : null,
  });
};
export default globalErrorHandler;

//pattern
/*
success
message
errorSources:[
  path:'',
  message:''
]
stack
*/
