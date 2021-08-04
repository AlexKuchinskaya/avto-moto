
import dayjs from "dayjs";

export const calculateDifference = (date) => {
  let now = dayjs()
  const timeDifferenceFromNow = dayjs(date).diff(now);

  console.log(`now`, now);
  console.log(`date`, date)
  console.log(`dayjs(date)`, dayjs(date));
  console.log(`timeDifferenceFromNow`, timeDifferenceFromNow)
  return timeDifferenceFromNow;
}

export const formatDifference = (date) => {
    const difference = calculateDifference(date);

}