
import fuel from "../../img/gasoline.svg";
import horsepower from "../../img/power.svg";
import transmission from "../../img/mechanics.svg";
import volume from "../../img/volume.svg";
const Details = ({details}) => {
    const pictures = {fuel, horsepower, volume, transmission};
    return <>
        <section className="details">
            <h2 className="details__title">Название</h2>
            <ul className="list details__list">
                {Object.keys(details.paremetres).map((parameterKey) => {
                    return <li key={parameterKey} className="details__item">
                        <img className="details__icon" src={pictures[parameterKey]} alt={details.paremetres[parameterKey]} width="40" height="40"></img>
                        <p className="details__name">{details.paremetres[parameterKey]}</p>
                    </li>;
                })}
            </ul>
            <div className="details__costs">
                <span className="details__price-current">2 300 000 ₽</span>
                <span className="details__price-old">2  400 000 ₽</span>
            </div>
            <button className="details__button" type="button">Оставить заявку</button>
            <button className="details__button details__button--credit" type="button">В кредит от { details.creditFrom }</button>
        </section>
    </>
}

export default Details