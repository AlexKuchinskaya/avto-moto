
import dayjs from "dayjs";

export const calculateDifference = (date) => {
  let now = dayjs();
  const timeDifferenceFromNow = dayjs(date).diff(now);
  return timeDifferenceFromNow;
};
