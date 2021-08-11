import React from 'react';
import PropTypes from "prop-types";
import {STARS_RATING} from "../../const/const";
import {checkRating} from "../../utils/utils";

const ReviewRating = ({reviewRating}) => {
  return <>
    <div className="feedback__rating">
      {STARS_RATING.map((star) => {
        return <>
          <div className={`feedback__star ${star <= reviewRating ? `feedback__star--active` : ``}`}></div>
        </>;
      })}
      <span className="feedback__result">{checkRating(reviewRating)}</span>

    </div>
  </>;
};

ReviewRating.propTypes = {
  reviewRating: PropTypes.number.isRequired
};

export default ReviewRating;
