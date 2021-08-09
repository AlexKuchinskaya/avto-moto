// import { filmsMock } from "../mocks/films";
import {ActionType} from "./action";

// import { TRANSPORT } from "../components/mocks/mock";

const initialState = {
  reviews: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_REVIEW:
      return {
        ...state, // деструктурируем предыдущее состояние
        reviews: [
          ...state.reviews,
          action.payload
        ] // меняем тот ключ который нужно поменять и возвращаем новый объект
      };

    //   case ActionType.GET_NEW_FILMLIST_BY_GENRE:
    //     return {
    //       ...state,
    //       filmList: state.filmList
    //     };
    default:
      return state;
  }

};

export {reducer};
