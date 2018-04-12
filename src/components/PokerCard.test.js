import { getGoldenRatio, getPokerCardRatio } from "./PokerCard";

test("Test getGoldenRatio function.", () => {
  expect(getGoldenRatio(16, "width")).toEqual(9);
  expect(getGoldenRatio(9, "height")).toEqual(16);
});

test("Test getPokerCardRatio(1 : 1.4) function.", () => {
  expect(getPokerCardRatio(14, "width")).toEqual(Number(10).toFixed());
  expect(getPokerCardRatio(88.9, "width")).toEqual(Number(63.5).toFixed());
  expect(getPokerCardRatio(63.5, "height")).toEqual(Number(88.9).toFixed());
  expect(getPokerCardRatio(55.3125)).toEqual(Number(77).toFixed());
});
