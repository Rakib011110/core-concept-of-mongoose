export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TAcademicSemesterName = 'Autumn' | 'summer' | 'fall';
export type TAcadeSemesterCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TAcademicSemesterName;
  code: TAcadeSemesterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TacademicSemesterNameCodeMapper = {
  [key: string]: string;
};
