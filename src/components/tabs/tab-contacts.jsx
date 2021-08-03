const TabContacts = () => {
    return <>
        <h2 className="visually-hidden">Контакты</h2>
        <ul className="list contacts__list">
            <li className="contacts__item">
                <h3 className="title contacts__title">Адрес</h3>
                <p className="contacts__description">Санкт-Петербург,набережная реки Карповки, дом 5</p>
            </li>
            <li className="contacts__item">
                <h3 className="title contacts__title">Режим работы</h3>
                <p className="contacts__description">Ежедневно, с 10:00 до 21:00</p>
            </li>
            <li className="contacts__item">
                <h3 className="title contacts__title">Режим работы</h3>
                <p className="contacts__description">8 (800) 333-55-99</p>
            </li>
            <li className="contacts__item">
                <h3 className="title contacts__title">E-mail</h3>
                <p className="contacts__description">info@avto-moto.ru</p>
            </li>
        </ul>
    </>
};
  

  
  export default TabContacts;