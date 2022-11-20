import { isAnagram } from ".";

describe("containsDuplicate", () => {
  test("should return true if anagram", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });
  test("should return false if not anagram", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
