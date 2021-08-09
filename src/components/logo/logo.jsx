import React from 'react';
import logo from "../../img/logo.svg";
const Logo = () => {
  return <>
    <a className="header__logo logo" href="!#" aria-label="На главную">
      <img className="logo__picture" src={logo} width="55" height="55" alt="Логотип Avto Moto"/>
      <div className="logo__container">
        <span className="logo__title">AVTO</span>
        <span className="logo__subtitle">MOTO</span>
      </div>
    </a>
  </>;
};

export default Logo;
