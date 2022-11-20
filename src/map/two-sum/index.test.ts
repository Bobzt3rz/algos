import { twoSum, twoSumV2 } from ".";

describe("twoSum", () => {
  test("case 1", () => {
    const input = [2, 7, 11, 15];
    expect(twoSum(input, 9)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSumV2(input, 9)).toEqual(expect.arrayContaining([0, 1]));
  });
  test("case 2", () => {
    const input = [3, 2, 4];
    expect(twoSum(input, 6)).toEqual(expect.arrayContaining([1, 2]));
    expect(twoSumV2(input, 6)).toEqual(expect.arrayContaining([1, 2]));
  });
  test("case 3", () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSumV2([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });
});
