import { combineReducers } from "redux";
import { ROTATE_DECK, SET_CARD_VALUE, ROTATE_CARD } from "actions";

const deck = (
  state = {
    isRotated: false
  },
  action
) => {
  switch (action.type) {
    case ROTATE_DECK:
      return {
        ...state,
        isRotated: action.rotate
      };
    default:
      return state;
  }
};

const card = (
  state = {
    isRotated: false,
    value: ""
  },
  action
) => {
  switch (action.type) {
    case SET_CARD_VALUE:
      return {
        ...state,
        value: action.value
      };
    case ROTATE_CARD:
      return {
        ...state,
        isRotated: action.rotate
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ deck, card });

export default rootReducer;
