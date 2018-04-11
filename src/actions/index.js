export const ROTATE_DECK = "ROTATE_DECK";
export const SET_CARD_VALUE = "SET_CARD_VALUE";
export const ROTATE_CARD = "ROTATE_CARD";

export const rotateDeck = rotate => ({
  type: ROTATE_DECK,
  rotate
});

export const setCardValue = value => ({
  type: SET_CARD_VALUE,
  value
});

export const rotateCard = rotate => ({
  type: ROTATE_CARD,
  rotate
});
