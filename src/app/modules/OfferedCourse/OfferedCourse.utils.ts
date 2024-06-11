import { TDays, TSchedule } from './OfferedCourse.interface';

export const hasTimeConflict = (
  assignedSchedules: TSchedule[],
  newSchedules: TSchedule,
) => {
  for (const schedule of assignedSchedules) {
    const existingsStartTime = new Date(`1970-01-01T${schedule.startTime}`);
    const existingsEndTime = new Date(`1970-01-01T${schedule.endTime}`);
    const newStartTime = new Date(`1970-01-01T${newSchedules.startTime}`);
    const newEndTime = new Date(`1970-01-01T${newSchedules.endTime}`);

    if (newStartTime < existingsEndTime && newEndTime > existingsStartTime) {
      return true;
    }
  }

  return false;
};
