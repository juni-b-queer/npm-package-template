import { sum } from "../../src";

describe("sum function", () => {
  const runTest = (inputOne: number, inputTwo: number, expected: number) => {
    expect(sum(inputOne, inputTwo)).toEqual(expected);
  };

  it(`1 and 1 should return 2`, () => {
    runTest(1,1,2);
  });
});