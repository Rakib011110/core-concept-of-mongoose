import { Schema, model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import {
  TGuardian,
  TStudent,
  TUserName,
  TLocalGuardian,
  StudentModel,
} from './students/student-interface';
import config from '../config';
import { boolean } from 'zod';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is missing, please add it.'],
    maxlength: [20, 'max allowd lenth  is 10'],
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not in capitalize format }',
    // },
  },
  middleName: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: function (value: string) {
        return validator.isAlpha(value);
      },
      message:
        '{VALUE} is not valid. It should only contain alphabetic characters.',
    },
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is missing, please add it.'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message:
        '{VALUE} is not valid. It should only contain alphabetic characters.',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father's name is missing, please add it."],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father's occupation is missing, please add it."],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is missing, please add it."],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is missing, please add it."],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is missing, please add it."],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is missing, please add it."],
  },
  ocupation: {
    type: String,
    required: [true, "Local guardian's occupation is missing, please add it."],
  },
  contactNo: {
    type: String,
    required: [
      true,
      "Local guardian's contact number is missing, please add it.",
    ],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is missing, please add it."],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is missing, please add it.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Student password is missing, please add it.'],
      maxlength: [20, 'password can not be more the 20 character'],
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is missing, please add it.'],
    },
    gender: {
      type: String,
      enum: {
        values: ['Male', 'Female', 'other'],
        message: '{VALUE} is not valid',
      },
      required: [true, 'Gender is missing, please add it.'],
    },
    dateOFBirth: { type: String },
    email: {
      type: String,
      required: [true, 'Email is missing, please add it.'],
      unique: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not valid. give the correct Email.',
      },
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is missing, please add it.'],
    },
    emergenceContactNo: {
      type: String,
      required: [true, 'Emergency contact number is missing, please add it.'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'O-', 'O+', 'AB+', 'AB-', 'B-', 'B+'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is missing, please add it.'],
    },
    parmenentAddres: {
      type: String,
      required: [true, 'Permanent address is missing, please add it.'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is missing, please add it.'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian information is missing, please add it.'],
    },
    profileImage: { type: String },
    isActive: { type: String, enum: ['active', 'blocked'], default: 'active' },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// pre save middle aware hooks

studentSchema.pre('save', async function (next) {
  // console.log((this, 'pre hook: we will save  data'));

  const user = this; // doc
  //  hashing password and save in to db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

// post save middleware /hook
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  // console.log(this);
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  // console.log(this);
  next();
});

// [ { $match: { isDeleted: { $ne: true } } } { '$match': { id: 'S1232a2222233356' } } ]
studentSchema.pre('aggregate', function (next) {
  // this.find({ isDeleted: { $ne: true } });
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// creating a custom statics method

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

/// creating a custom instance method
// studentSchema.methods.isUserExist = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

export const Student = model<TStudent, StudentModel>('student', studentSchema);
