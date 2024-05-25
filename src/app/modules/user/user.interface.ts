import { string } from 'zod';

export type TUser = {
  _id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  stutus: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
