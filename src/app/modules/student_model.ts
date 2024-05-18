import { Schema, model } from 'mongoose';
import {
  Guardian,
  Student,
  UserName,
  LocalGuardian,
} from './students/student-interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  ocupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['Male', 'Female'],
  dateOFBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  emergenceContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'O-', 'O+', 'AB+', 'AB-', 'B-', 'B+'],

  presentAddress: { type: String, required: true },
  parmenentAddres: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,

  profileImage: { type: String, required: false },
  isActive: { type: String, enum: ['active', 'blocked'], required: true },
});

export const StudentModel = model<Student>('student', studentSchema);
