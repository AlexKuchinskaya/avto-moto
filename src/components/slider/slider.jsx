import React from 'react';
import {useState} from "react";
import {TransportPropType} from '../../types/types';

const Slider = ({slides}) => {
  const {pictures} = slides;
  const [count, setCount] = useState(0);
  const ZERO = 0;

  const handleNext = () => {
    if (count < pictures.length - 1) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handlePrevious = () => {
    if (count > ZERO) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <section className="slider">
      <h2 className="visually-hidden">Слайдер с фотографиями</h2>
      <div className="slider__photo slider__photo--new">
        <img
          src={pictures[count].url}
          alt={pictures[count].name}
          width="600"
          height="375"
        >
        </img>
      </div>
      <div className="slider__wrapper">
        <button className="slider__button slider__button--previous" onClick={handlePrevious}>
          <svg className={`slider__arrow ${count === ZERO ? `slider__arrow--disable` : ``}`} width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128"/>
          </svg>
        </button>
        <ul className="list slider__list">
          {pictures.map((picture) => {
            return <li key={picture.url} className="slider__item">
              <img
                src={picture.url}
                alt={picture.name}
                width="128"
                height="80"
              >
              </img>
            </li>;
          })}
        </ul>
        <button className="slider__button slider__button--next" onClick={handleNext}>
          <svg className={`slider__arrow ${count === pictures.length - 1 ? `slider__arrow--disable` : ``}`} width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

Slider.propTypes = {
  slides: TransportPropType
};

export default Slider;
