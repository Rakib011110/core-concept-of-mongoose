import {
  TAcadeSemesterCode,
  TAcademicSemesterName,
  TMonths,
  TacademicSemesterNameCodeMapper,
} from './academicSemester.interface';

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'summer',
  'fall',
];

export const AcademicSemesterCode: TAcadeSemesterCode[] = ['01', '02', '03'];
export const academicSemesterNameCodeMapper: TacademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
