type List<T> = (T | undefined)[];

export class ArrayList<T> {
    private capacity: number;
    private length: number;
    private list: List<T>;
    constructor(capacity = 2) {
        this.length = 0;
        this.capacity = capacity;
        this.list = new Array(capacity).fill(undefined);
    }
    peek(idx: number): T | undefined {
        if (idx > this.capacity - 1) return undefined;
        return this.list[idx];
    }
    pop(): T | undefined {
        if (this.length == 0) return undefined;
        const value = this.list[this.length - 1];
        this.list[this.length - 1] = undefined;
        this.length--;
        return value;
    }
    push(value: T) {
        if (this.length == this.capacity) {
            const newArray: List<T> = new Array(this.capacity * 2);
            this.list.forEach((val, idx) => {
                newArray[idx] = val;
            })
            this.list = newArray;
        }
        this.list[this.length] = value;
        this.length++;
        this.capacity = this.capacity * 2;
    }
}
