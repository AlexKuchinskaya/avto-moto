
import React from 'react';
import fuel from "../../img/gasoline.svg";
import horsepower from "../../img/power.svg";
import transmission from "../../img/mechanics.svg";
import volume from "../../img/volume.svg";
import {TransportPropType} from '../../types/types';
const Details = ({details}) => {
  const {price, paremetres, name} = details;
  const pictures = {fuel, horsepower, volume, transmission};
  return (
    <section className="details">
      <h2 className="details__title">{name}</h2>
      <ul className="list details__list">
        {Object.keys(paremetres).map((parameterKey) => {
          return <li key={parameterKey} className="details__item">
            <img className="details__icon" src={pictures[parameterKey]} alt={paremetres[parameterKey]} width="40" height="40"></img>
            <p className="details__name">{paremetres[parameterKey]}</p>
          </li>;
        })}
      </ul>
      <div className="details__costs">
        <span className="details__price-current">{`${price.current} ₽`}</span>
        <span className="details__price-old">{`${price.old} ₽`}</span>
      </div>
      <button className="details__button" type="button">Оставить заявку</button>
      <button className="details__button details__button--credit" type="button">{`В кредит от ${price.credit} ₽`}</button>
    </section>
  );
};

Details.propTypes = {
  details: TransportPropType
};

export default Details;
