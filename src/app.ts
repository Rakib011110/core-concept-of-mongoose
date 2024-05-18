import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.router';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//  application routes
app.use('/api/v1/students', StudentRoutes);

const getAControlaler = (req: Request, res: Response) => {
  // res.send("Hello World!");
  const a = 20;
  res.send(a);
};

app.get('/', getAControlaler);
// console.log(process.cwd());

export default app;
