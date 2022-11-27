type Item<T> = {
  value: T;
  next?: Item<T>;
};

export class Queue<T> {
  public length: number;

  private head: Item<T> | undefined;
  private tail: Item<T> | undefined;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }
  enqueue(item: T): void {
    const localItem: Item<T> = { value: item };
    if (!this.head || !this.tail) {
      this.head = localItem;
      this.tail = localItem;
    } else {
      this.tail.next = localItem;
      this.tail = localItem;
    }
    this.length += 1;
  }
  dequeue(): T | undefined {
    if (!this.head) return undefined;
    const output = this.head;
    this.head = this.head.next;
    this.length -= 1;

    // free
    output.next = undefined;
    if (this.length == 0) {
      this.tail = undefined;
    }

    return output.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
