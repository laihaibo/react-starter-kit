import dayjs from 'dayjs';

export const NOW = dayjs();
export const START = dayjs().startOf('year');
export const END = dayjs().endOf('year');

export const getRange = (start, end) => {
  return end.diff(start) + 1;
};
