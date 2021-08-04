import { STARS_RATING } from "../../const/const";
import { checkRating } from "../../utils/utils";

const ReviewRating = ({reviewRating}) => {
    return <>
       <div className="feedback__rating">
            {STARS_RATING.map((star) => {
                return <>
                    <div key={star} className={`feedback__star ${star <= reviewRating ? `feedback__star--active` : ``}`}></div>
                </>
            })}
            <span className="feedback__result">{checkRating(reviewRating)}</span>

    </div>
    </>;
  };
  
export default ReviewRating;