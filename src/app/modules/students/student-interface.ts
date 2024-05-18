export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
};

export type LocalGuardian = {
  name: string;
  ocupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  dateOFBirth?: string;
  email: string;
  avatar?: string;
  contactNumber: string;
  emergenceContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'O-' | 'O+' | 'AB+' | 'AB-' | 'B-' | 'B+';
  gender: 'Male' | 'Female';
  presentAddress: string;
  parmenentAddres: string;
  guardian: Guardian;

  localGuardian: Guardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
