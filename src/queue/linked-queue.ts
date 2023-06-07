class Node<T = any> {
  value: T | null = null;
  next: Node<T> | null = null;

  constructor(val: T) {
    this.value = val;
  }
}

export class LinkedQueue<T = any> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  push(val: T) {
    const node = new Node<T>(val);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
  }

  pop(): T | null {
    if (!this.head) {
      throw new Error("The linked queue is empty.");
    }
    const tempNode = this.head;
    this.head = tempNode.next;

    if (this.head === null) this.tail === null;

    return tempNode.value;
  }

  print(): string {
    let tempNode = this.head;
    let result = [];

    while (tempNode !== null) {
      result.push(tempNode.value);
      tempNode = tempNode.next;
    }

    return result.join("->");
  }
}
