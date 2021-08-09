import {Rating} from "../const/const";

export const checkRating = (rating) => {
  switch (rating) {
    case Rating.ONE:
      return `Очень плохо`;
    case Rating.TWO:
      return `Не советует`;
    case Rating.THREE:
      return `Советует`;
    case Rating.FOUR:
      return `Очень советует`;
    case Rating.FIVE:
      return `Обязательно брать`;
    default:
      return `Нет оценки`;
  }
};
