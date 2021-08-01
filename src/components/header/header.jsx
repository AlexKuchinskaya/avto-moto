import {allNavSiteLinks} from '../const/const';
import Logo from '../logo/logo';

const Header = ({activeLink}) => {
    return (
      <header className="header">
        <div className="header__wrapper">
           <Logo />
           <nav className="header__nav">
                <ul className="list main-nav site-list">
                {allNavSiteLinks.map((siteLink) => {
                    return <li key={siteLink} className="site-list__item">
                    <a href="!#" className={`site-list__link ${siteLink === activeLink ? `site-list__link--active` : ``}`} data-link={siteLink}>{siteLink}</a>
                    </li>;
                })}
                </ul>
          </nav>
        </div>
      </header>
    );
}
  
export default Header;