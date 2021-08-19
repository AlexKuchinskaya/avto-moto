import {TRANSPORT} from "../components/mocks/mock";
import {ActionType} from "./action";

const initialState = {
  reviews: TRANSPORT.reviews
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return {
        ...state,
        reviews: [
          ...state.reviews,
          action.payload
        ]
      };
    default:
      return state;
  }

};

export {reducer};
