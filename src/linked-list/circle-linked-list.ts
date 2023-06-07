import { Node } from "./node";

export class CircleLinkedList<T = any> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  size = 0;
  capacity = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  isFull() {
    return this.size !== 0 && this.size === this.capacity;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  add(val: T) {
    const node = new Node(val);

    if (this.isFull()) throw new Error("The list is full.");

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.size++;

    if (this.size === this.capacity - 1) {
      this.tail.next = this.head;
    }
  }

  pick(val: T) {
    let tempNode = this.head;

    if (tempNode === null) {
      throw new Error("The list is empty.");
    } else {
      if (tempNode.value === val) {
        this.capacity--;
        this.size--;
      } else {
        while (tempNode.next !== null) {
          if (tempNode.value === val) {
            break;
          }
          tempNode = tempNode.next;
        }
      }
    }
  }

  print() {
    let tempNode = this.head;
    let result = [];

    while (tempNode !== null) {
      result.push(tempNode?.value);
      tempNode = tempNode.next;

      if (this.tail && this.tail?.next === this.head) {
        break;
      }
    }

    return result.join("->");
  }
}
