import * as z from 'zod';

// Define the UserName schema
const UserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().min(1),
  lastName: z.string().min(1),
});

// Define the Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
});

// Define the LocalGuardian schema
const LocalguardianValidationSchema = z.object({
  name: z.string().min(1),
  ocupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

// Define the Student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: UserNameValidationSchema,
      gender: z.enum(['Male', 'Female', 'other']),
      dateOFBirth: z.string().optional(),
      email: z.string().email(),
      contactNumber: z.string().min(1),
      emergenceContactNo: z.string().min(1),
      bloodGroup: z
        .enum(['A+', 'A-', 'O-', 'O+', 'AB+', 'AB-', 'B-', 'B+'])
        .optional(),
      presentAddress: z.string().min(1),
      parmenentAddres: z.string().min(1),
      guardian: guardianValidationSchema,
      localGuardian: LocalguardianValidationSchema,
      admissionSemester: z.string(),
      profileImage: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
