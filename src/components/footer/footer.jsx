import {footerNavLinksList} from '../const/const';

const Footer = () => {
    return <>
      <footer className="footer">
        <ul className="list container-site footer__list">
                {footerNavLinksList.map((footerLink) => {
                return <li key={footerLink} className="footer__item">
                    <a href="!#" className="footer__link site-list__link">{footerLink}</a>
                </li>;
                })}
            </ul>
      </footer>
    </>;
};
  
export default Footer;