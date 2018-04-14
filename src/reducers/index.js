import { combineReducers } from "redux";
import { ROTATE_DECK, SET_CARD_VALUE, ROTATE_CARD } from "actions";

const deck = (
  state = {
    isRotatedDeck: false,
    isRotatedCard: false,
    cardValue: ""
  },
  action
) => {
  const { type, isRotatedDeck, cardValue, isRotatedCard } = action;

  switch (type) {
    case ROTATE_DECK:
      return {
        ...state,
        isRotatedDeck
      };
    case SET_CARD_VALUE:
      return {
        ...state,
        cardValue
      };
    case ROTATE_CARD:
      return {
        ...state,
        isRotatedCard
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ deck });

export default rootReducer;
