import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundError from './app/middleware/notfoundErrror';
import router from './routes';
const app: Application = express();
import cookieParser from 'cookie-parser';

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:5173'] }));

//  application routes
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1', router);

const getTest = async (req: Request, res: Response) => {
  // Promise.reject();

  const a = 20;
  res.send(a);
};

app.get('/', getTest);

app.use(globalErrorHandler);
app.use(notFoundError);

export default app;
