import React from 'react';
import {useState} from "react";
import {TransportPropType} from '../../types/types';
import {calculateDifference} from '../../utils/date-difference';
import FormReviewModal from "../form-review-modal/form-review-modal";
import ReviewRating from './review-rating';
const TabReviews = ({reviewsData}) => {
  const {reviews} = reviewsData;
  calculateDifference(reviews[0].date);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const showModal = () => {
    setIsModalOpened(true);
  };

  const hideModal = () => {
    setIsModalOpened(false);
  };

  return (
    <div className="reviews">
      <h2 className="visually-hidden">Отзывы</h2>
      <ul className="list reviews__list feedback">
        {reviews.map((review, index) => {
          return (
            <li key={`${review.user}-${index}`} className="reviews__item feedback__item">
              <h3 className="title feedback__user">{review.user}</h3>
              <div className="feedback__characteristics feedback__characteristics--plus">
                <h4 className="title feedback__title">Достоинства</h4>
                <p className="feedback__description">{review.pros}</p>
              </div>
              <div className="feedback__characteristics feedback__characteristics--minus">
                <h4 className="title feedback__title">Недостатки</h4>
                <p className="feedback__description">{review.cons}</p>
              </div>
              <div className="feedback__comment">
                <h4 className="title feedback__title">Комментарий</h4>
                <p className="feedback__description">{review.comment}</p>
              </div>
              <ReviewRating reviewRating={review.rating}/>
              <div className="feedback__final">
                <span className="feedback__datetime">{`${review.date} минуту назад`}</span>
                <button className="feedback__response">Ответить</button>
              </div>
            </li>
          );
        })}
      </ul>
      {isModalOpened ? <FormReviewModal closeModal={hideModal}/> : null }
      <button className="reviews__button" onClick={showModal}>оставить отзыв</button>
    </div>
  );
};

TabReviews.propTypes = {
  reviewsData: TransportPropType
};
export default TabReviews;
