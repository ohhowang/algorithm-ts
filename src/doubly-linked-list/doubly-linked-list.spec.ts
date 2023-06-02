import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly linked list", () => {
  it("insert at begin", () => {
    const list = new DoublyLinkedList<number>();
    list.insertAtBegin(3);
    list.insertAtBegin(2);
    list.insertAtBegin(1);
    expect(list.print()).toBe("1->2->3");
    expect(list.print2()).toBe("1->2->3->3->2->1");
  });

  it("insert at end", () => {
    const list = new DoublyLinkedList<number>();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    expect(list.print()).toBe("1->2->3");
    expect(list.print2()).toBe("1->2->3->3->2->1");
  });

  it("insert after target node", () => {
    const list = new DoublyLinkedList<number>();
    expect(() => list.insertAfter(0, 1)).toThrowError("The doubly linked list is empty.");
    list.insertAtBegin(1);
    list.insertAtEnd(2);
    list.insertAtEnd(4);
    list.insertAfter(2, 3);
    expect(list.print()).toBe("1->2->3->4");
    expect(list.print2()).toBe("1->2->3->4->4->3->2->1");
    expect(() => list.insertAfter(0, 5)).toThrowError("Node with target value does not exist.");
  });

  it("delete at begin", () => {
    const list = new DoublyLinkedList<number>();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    list.deleteAtBegin();
    expect(list.print()).toBe("2->3");
    expect(list.print2()).toBe("2->3->3->2");
    list.deleteAtBegin();
    expect(list.print()).toBe("3");
    list.deleteAtBegin();
    expect(list.print()).toBe("");
    expect(() => list.deleteAtBegin()).toThrowError("The doubly linked list is empty");
  });

  it("delete at end", () => {
    const list = new DoublyLinkedList<number>();
    list.insertAtEnd(1);
    list.insertAtEnd(2);
    list.insertAtEnd(3);
    list.deleteAtEnd();
    expect(list.print()).toBe("1->2");
    expect(list.print2()).toBe("1->2->2->1");
    list.deleteAtEnd();
    expect(list.print()).toBe("1");
    list.deleteAtEnd();
    expect(list.print()).toBe("");
    expect(() => list.deleteAtEnd()).toThrowError("The doubly linked list is empty");
  });
});
