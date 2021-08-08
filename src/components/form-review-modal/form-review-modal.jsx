import { useEffect, useRef } from "react";
const FormReviewModal = ({closeModal}) => {
    const ESC_KEY = `Escape`
    const formRef = useRef();
    let handleMousedownForm = (evt) => {
        if (!formRef.current.contains(evt.target)) {
            closeModal();
        }
    }
    const handleEscapeKeyForm = (evt) => {
        if (evt.key === ESC_KEY) {
            closeModal();
        }
    }
    useEffect(() => {
        document.addEventListener(`keydown`, handleEscapeKeyForm);
        document.addEventListener(`mousedown`, handleMousedownForm);
        return () => {
            document.removeEventListener(`mousedown`, handleMousedownForm);
            document.removeEventListener(`keydown`, handleEscapeKeyForm);
          };
    })  
    return <>
    <div className="modal modal--show">
        <div ref={formRef} className="modal__main">
        <h3 className="title form-review__title">Оставьте отзыв</h3>
      <form className="modal__form form-review">
            <div className="form-review__container">
                <div className="form-review__wrapper">
                    <div className="form-rieview__features">
                        <label htmlFor="userName"></label>
                        <input
                            className="form-review__input"
                            id="userName"
                            type="text"
                            // autoFocus={true}
                            placeholder="Имя"
                            required
                            // value={userName}
                            // onChange={(evt) => changeUserName(evt.target.value)}
                        />
                    </div>

                    <div className="form-rieview__features">
                        <label htmlFor="pros"></label>
                        <input
                            className="form-review__input"
                            id="pros"
                            type="text"
                            placeholder="Достоинства"
                            // value={worth}
                            // onChange={(evt) => changeWorth(evt.target.value)}
                    />
                    </div>
                    <div className="form-rieview__features">
                        <label htmlFor="cons"></label>
                        <input
                            className="form-review__input"
                            id="cons"
                            type="text"
                            placeholder="Недостатки"
                            // value={worth}
                            // onChange={(evt) => changeWorth(evt.target.value)}
                        />
                    </div>
                </div>
                <div className="form-review__wrapper">
                    <div className="form-review__rating">
                        <span className="form-review__label">Оцените товар:</span>
                    {/* <RatingForm rating={rating} onChangeRating={changeRating}/> */}
                    </div>
                    <div className="form-review__textarea">
                        <label htmlFor="comments"></label>
                        <textarea
                            className="form-review__comments"
                            id="comments"
                            placeholder="Комментарий"
                            // value={comment}
                            // onChange={(evt) => changeComment(evt.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button
                className="form-review__button"
                type="submit"
                onClick={(evt) => this.sendReviewHandler(evt)}
            >оставить отзыв
            </button>
      </form>
      <button
          className="modal__button-close"
          onClick={closeModal}>
          <svg className="modal__button-svg" width="15" height="16" viewBox="0 0 15 16">
            <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z"/>
         </svg>
        </button>
        </div>
      </div>
    </>;
  };
  
export default FormReviewModal;