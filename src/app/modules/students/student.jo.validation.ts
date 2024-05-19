import Joi from 'joi';

// creating joi schema validation suing joi
// Define Joi schema for userName
const userNameValidationSchema = Joi.object({
  firstName: Joi.string().required().max(20).messages({
    'any.required': 'First name required.',
    'string.max': 'Max 20 chars.',
  }),
  middleName: Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'any.required': 'Middle name required.',
      'string.pattern.base': 'Only alphabets.',
    }),
  lastName: Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'any.required': 'Last name required.',
      'string.pattern.base': 'Only alphabets.',
    }),
});

// Define Joi schema for guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': "Father's name required.",
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': "Father's occupation required.",
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': "Father's contact no. required.",
  }),
  motherName: Joi.string().required().messages({
    'any.required': "Mother's name required.",
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': "Mother's occupation required.",
  }),
});

// Define Joi schema for localGuardian
const localguardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': "Local guardian's name required.",
  }),
  ocupation: Joi.string().required().messages({
    'any.required': "Local guardian's occupation required.",
  }),
  contactNo: Joi.string().required().messages({
    'any.required': "Local guardian's contact no. required.",
  }),
  address: Joi.string().required().messages({
    'any.required': "Local guardian's address required.",
  }),
});

// Define Joi schema for student
export const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'ID required.',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name required.',
  }),
  gender: Joi.string().valid('Male', 'Female', 'other').required().messages({
    'any.required': 'Gender required.',
    'any.only': 'Invalid gender.',
  }),
  dateOFBirth: Joi.string().optional(),
  email: Joi.string().required().email().messages({
    'any.required': 'Email required.',
    'string.email': 'Invalid email.',
  }),
  contactNumber: Joi.string().required().messages({
    'any.required': 'Contact no. required.',
  }),
  emergenceContactNo: Joi.string().required().messages({
    'any.required': 'Emergency contact no. required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'O-', 'O+', 'AB+', 'AB-', 'B-', 'B+')
    .optional(),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address required.',
  }),
  parmenentAddres: Joi.string().required().messages({
    'any.required': 'Permanent address required.',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian info required.',
  }),
  localGuardian: localguardianValidationSchema.required().messages({
    'any.required': 'Local guardian info required.',
  }),
  profileImage: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
  avatar: Joi.string().optional(),
});
