export const ActionType = {
  SET_REVIEWS: `SET_REVIEWS`,
  ADD_REVIEW: `ADD_REVIEW`,
  CLEAR_REVIEW_FORM: `CLEAR_REVIEW_FORM`
};


export const addReview = (review) => ({
  type: ActionType.ADD_REVIEW,
  payload: review,
});

