import { containsDuplicate } from ".";

describe("containsDuplicate", () => {
  test("should return true if there is duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1, 1])).toBe(true);
  });
  test("should return false if no duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
