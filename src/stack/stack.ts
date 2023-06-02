import { Node } from "./node";

export class Stack<T = any> {
  top: Node<T> | null = null;
  capacity = 0;
  size = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  isFull() {
    return this.size !== 0 && this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(val: T) {
    const node = new Node<T>(val);

    if (!this.top) {
      this.top = node;
    } else if (this.isFull()) {
      throw new Error("The stack is full.");
    } else {
      const tempNode = this.top;
      node.next = tempNode;
      this.top = node;
    }
    this.size++;
  }

  pop() {
    const tempNode = this.top;

    if (tempNode === null) {
      throw new Error("The stack is empty.");
    } else {
      if (tempNode.next === null) {
        this.top = null;
      } else {
        this.top = tempNode.next;
        tempNode.next = null;
      }
    }
    this.size--;
  }

  print() {
    let result: T[] = [];
    let tempNode = this.top;

    while (tempNode !== null) {
      result.push(tempNode.value);
      tempNode = tempNode.next;
    }

    return result.join("->");
  }
}
