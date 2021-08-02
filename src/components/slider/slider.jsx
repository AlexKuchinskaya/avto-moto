import { useState } from "react";
const Slider = ({slides}) => {
    const {pictures} = slides
    const [count, setCount] = useState(0);
    return <>
        <section className="slider">
            <h2 className="visually-hidden">Слайдер с фотографиями</h2>
            <div className="slider__photo slider__photo--new">
                <img 
                    src={pictures[0].url}
                    alt={pictures[0].name}
                    width="600"
                    height="375"
                >
                </img>
            </div>
            <div className="slider__wrapper">
                <div className="slider__button slider__button--previous">
                    <svg className="slder__arrow slder__arrow--left" width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128" stroke="#D7D9DF"/>
                    </svg>
                </div>
                <ul className="list slider__list">
                {pictures.map((picture) => {
                    return <li key={picture} className="slider__item">
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
    
                <div className="slider__button slider__button--next">
                    <svg className="slder__arrow slder__arrow--right" width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D"/>
                    </svg>
                </div>
            </div>
        </section>
    </>
}

export default Slider