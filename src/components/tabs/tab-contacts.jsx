import map from "../../img/map.png";
const TabContacts = () => {
    return (
    <div className="contacts">
        <h2 className="visually-hidden">Контакты</h2>
        <ul className="list contacts__list">
            <li className="contacts__item">
                <h3 className="title contacts__title">Адрес</h3>
                <p className="contacts__description">Санкт-Петербург, <br/> набережная реки Карповки, дом 5</p>
            </li>
            <li className="contacts__item">
                <h3 className="title contacts__title">Режим работы</h3>
                <p className="contacts__description">Ежедневно, с 10:00 до 21:00</p>
            </li>
            <li className="contacts__item">
                <h3 className="title contacts__title">Телефон</h3>
                <a className="contacts__description contacts__tel" href="tel:88003335599">8 (800) 333-55-99</a>
            </li>
            <li className="contacts__item">
                <h3 className="title contacts__title">E-mail</h3>
                <a className="contacts__description contacts__email" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
            </li>
        </ul>
        <div className="contacts__map">
            <img src={map} width="431" height="271" alt="Карта с месторасположением"></img>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8301744005787!2d30.31430331609816!3d59.96814048188694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2sNaberezhnaya%20Reki%20Karpovki%2C%205%2C%20Sankt-Peterburg%2C%20Russia%2C%20197022!5e0!3m2!1sen!2ses!4v1628031355340!5m2!1sen!2ses" width="431" height="271" style={{border:0}} loading="lazy" title="Карта с месторасположением Cat Energy. Санкт-Петербург,набережная реки Карповки, дом 5"></iframe> */}
        </div>
    </div>
    )
};
  

  
  export default TabContacts;