import { Model } from 'mongoose';
// import { Student } from '../student_model';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
};

export type TLocalGuardian = {
  name: string;
  ocupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  dateOFBirth?: string;
  email: string;
  avatar?: string;
  contactNumber: string;
  emergenceContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'O-' | 'O+' | 'AB+' | 'AB-' | 'B-' | 'B+';
  gender: 'Male' | 'Female' | 'other';
  presentAddress: string;
  parmenentAddres: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};

export type StudentMethods = {
  isUserExist(id: string): Promise<TStudent>;
};

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethods
>;
