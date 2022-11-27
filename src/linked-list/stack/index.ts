type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Stack<T> {
  public length: number;
  private head: Node<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }
  push(item: T): void {
    const newNode: Node<T> = { value: item };
    this.length++;
    const head = this.head;
    this.head = newNode;
    if (head) {
      this.head.next = head;
    }
  }
  pop(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    const head = this.head;
    this.head = this.head.next;
    // free
    head.next = undefined;
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
