import { CircleLinkedList } from "./circle-linked-list";

describe("circle linked list", () => {
  it("Adding node to circle linked list.", () => {
    const list = new CircleLinkedList<number>(5);
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    expect(list.print()).toBe("1->2->3->4->5");
    expect(() => list.add(5)).toThrowError("The list is full.");
  });
});
