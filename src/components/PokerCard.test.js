import { getGoldenRatio } from "./PokerCard";
test("Test getGoldenRatio function.", () => {
  expect(getGoldenRatio(16, "width")).toEqual(9);
  expect(getGoldenRatio(9, "height")).toEqual(16);
});
