import { SingleLinkedList } from "./single-linked-list";

describe("single linked list", () => {
  it("insert at begin", () => {
    const list = new SingleLinkedList<number>();
    list.insertAtBegin(3);
    list.insertAtBegin(2);
    list.insertAtBegin(1);
    expect(list.print()).toBe("1->2->3");
  });

  it("insert at end", () => {
    const list = new SingleLinkedList<number>();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    expect(list.print()).toBe("1->2->3");
  });

  it("insert before target node", () => {
    const list = new SingleLinkedList<number>();
    expect(() => list.insertBefore(0, 6)).toThrowError("the linked list is empty");
    list.insertAtEnd(1);
    list.insertAtEnd(3);
    list.insertAtEnd(5);
    list.insertBefore(3, 2);
    expect(list.print()).toBe("1->2->3->5");
    list.insertBefore(5, 4);
    expect(list.print()).toBe("1->2->3->4->5");
    expect(() => list.insertBefore(0, 6)).toThrowError("not found target node");
  });

  it("insert after target node", () => {
    const list = new SingleLinkedList<number>();
    expect(() => list.insertBefore(0, 6)).toThrowError("the linked list is empty");
    list.insertAtEnd(1);
    list.insertAtEnd(3);
    list.insertAtEnd(5);
    list.insertAfter(1, 2);
    expect(list.print()).toBe("1->2->3->5");
    list.insertAfter(3, 4);
    expect(list.print()).toBe("1->2->3->4->5");
    expect(() => list.insertBefore(0, 6)).toThrowError("not found target node");
  });

  it("node is exist", () => {
    const list = new SingleLinkedList<number>();
    expect(list.findNode(1)).toBe(null);
    list.insertAtEnd(1);
    expect(list.findNode(1)?.value).toBe(1);
  });

  it("delete at begin", () => {
    const list = new SingleLinkedList<number>();
    list.insertAtBegin(3);
    list.insertAtBegin(2);
    list.insertAtBegin(1);
    list.deleteAtBegin();
    expect(list.print()).toBe("2->3");
    list.deleteAtBegin();
    expect(list.print()).toBe("3");
    list.deleteAtBegin();
    expect(list.print()).toBe("");
    expect(() => list.deleteAtBegin()).toThrowError("the linked list is empty");
  });

  it("delete at end", () => {
    const list = new SingleLinkedList<number>();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    list.insertAtEnd(4);
    list.insertAtEnd(5);
    list.deleteAtEnd();
    expect(list.print()).toBe("1->2->3->4");
    list.deleteAtEnd();
    expect(list.print()).toBe("1->2->3");
    list.deleteAtEnd();
    expect(list.print()).toBe("1->2");
    list.deleteAtEnd();
    expect(list.print()).toBe("1");
    list.deleteAtEnd();
    expect(list.print()).toBe("");
    expect(() => list.deleteAtEnd()).toThrowError("the linked list is empty");
  });

  it("update node", () => {
    const list = new SingleLinkedList<number>();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    list.update(2, 22);
    expect(list.print()).toBe("1->22->3");
  });
});
