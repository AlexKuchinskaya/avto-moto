import React from 'react';
import {allNavSiteLinks} from '../../const/const';
import Logo from '../logo/logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container-site">
        <Logo />
        <nav className="header__nav">
          <ul className="list site-list">
            {allNavSiteLinks.map((siteLink) => {
              return <li key={siteLink} className="site-list__item">
                <a href="!#" className="site-list__link" data-link={siteLink}>{siteLink}</a>
              </li>;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
