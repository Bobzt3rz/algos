import { Stack } from ".";

describe("Stack", () => {
  test("test stack", () => {
    const stack = new Stack();
    expect(stack.peek()).toBe(undefined);
    expect(stack.length).toBe(0);
    expect(stack.pop()).toBe(undefined);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.length).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.length).toBe(1);
    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.peek()).toBe(undefined);
    expect(stack.length).toBe(0);
  });
});
