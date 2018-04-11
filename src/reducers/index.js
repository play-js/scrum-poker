import { combineReducers } from "redux";
import { ROTATE_DECK } from "actions";

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

const rootReducer = combineReducers({ deck });

export default rootReducer;
