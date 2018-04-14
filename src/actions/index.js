export const ROTATE_DECK = "ROTATE_DECK";
export const SET_CARD_VALUE = "SET_CARD_VALUE";
export const ROTATE_CARD = "ROTATE_CARD";

export const rotateDeck = isRotatedDeck => ({
  type: ROTATE_DECK,
  isRotatedDeck
});

export const setCardValue = cardValue => ({
  type: SET_CARD_VALUE,
  cardValue
});

export const rotateCard = isRotatedCard => ({
  type: ROTATE_CARD,
  isRotatedCard
});
