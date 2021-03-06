import React from 'react';
import {STARS_RATING} from "../../const/const";
import PropTypes from 'prop-types';

const FormRating = ({ratingValue, handleFormRatingInput, handleRatingKeyPress}) => {
  return (
    <div className="rating__stars">
      {STARS_RATING.map((ratingNumber, index) =>
        <React.Fragment key={`${index}-${ratingNumber}`}>
          <label className="rating__container" htmlFor={`star-${index}`}>
            <svg className={`rating__star ${ratingNumber <= ratingValue ? `rating__star--active` : ``}`} width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fillOpacity="0.7"/>
            </svg>
            <input
              onChange={handleFormRatingInput}
              onKeyPress={(evt) => handleRatingKeyPress(evt)}
              className="visually-hidden rating__input"
              id={`star-${index}`}
              type="radio"
              name="rating"
              tabIndex={0}
              value={ratingNumber}
              defaultChecked={ratingNumber === ratingValue ? true : false}
            />
          </label>
        </React.Fragment>
      )}
    </div>
  );
};

FormRating.propTypes = {
  handleFormRatingInput: PropTypes.func.isRequired,
  handleRatingKeyPress: PropTypes.func.isRequired,
  ratingValue: PropTypes.number.isRequired,
};
export default FormRating;
