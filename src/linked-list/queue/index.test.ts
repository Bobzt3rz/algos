import { Queue } from ".";

describe("Queue", () => {
  test("test queue", () => {
    const queue = new Queue();
    expect(queue.peek()).toBe(undefined);
    expect(queue.length).toBe(0);
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.length).toBe(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.length).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.peek()).toBe(undefined);
    expect(queue.length).toBe(0);
  });
});
