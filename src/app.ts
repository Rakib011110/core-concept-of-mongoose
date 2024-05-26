import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFoundError from './app/middleware/notfoundErrror';
import router from './routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//  application routes
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1', router);

const getTest = (req: Request, res: Response) => {
  const a = 20;
  res.send(a);
};

app.get('/', getTest);

app.use(globalErrorHandler);
app.use(notFoundError);

export default app;
