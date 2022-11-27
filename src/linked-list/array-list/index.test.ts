import { ArrayList } from ".";

describe("ArrayList", () => {
    test("test", () => {
        const arrayList = new ArrayList();
        expect(arrayList.peek(0)).toBe(undefined);
        expect(arrayList.pop()).toBe(undefined);
        arrayList.push(1);
        expect(arrayList.peek(0)).toBe(1);
        expect(arrayList.peek(3)).toBe(undefined);
        arrayList.push(2);
        arrayList.push(3);
        expect(arrayList.peek(2)).toBe(3);
        expect(arrayList.pop()).toBe(3);
        expect(arrayList.pop()).toBe(2);
        expect(arrayList.peek(0)).toBe(1);
        expect(arrayList.peek(1)).toBe(undefined);
        expect(arrayList.pop()).toBe(1);
        expect(arrayList.peek(0)).toBe(undefined);

    })
})
