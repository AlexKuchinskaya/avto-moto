const TabReviews = ({reviewsData}) => {
    const {reviews} = reviewsData
    return (
        <div className="reviews">
            <h2 className="visually-hidden">Отзывы</h2>
            <ul className="list reviews__list feedback">
                {reviews.map((review) => {
                    return(
                        <li className="reviews__item feedback__item">
                            <h3 className="title feedback__user">{review.user}</h3>
                            <div className="feedback__characteristics feedback__characteristics--plus">
                                <h4 className="title feedback__title">Достоинства</h4>
                                <p className="feedback__description">{review.pros}</p>
                            </div>
                            <div className="feedback__characteristics feedback__characteristics--minus">
                                <h4 className="title feedback__title">Недостатки</h4>
                                <p className="feedback__description">{review.cons}</p>
                            </div>
                            <div className="feedback__comment">
                                <h4 className="title feedback__title">Комментарий</h4>
                                <p className="feedback__description">{review.comment}</p>
                            </div>
                            <div>Rating</div>
                            <div className="">
                                <span className="feedback__datetime">{`${review.date} назад`}</span>
                                <button className="feedback__response">Ответить</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className="reviews__button">оставить отзыв</button>
        </div>
    )
}
    
export default TabReviews;