import { Node } from "./node";

export class DoublyLinkedList<T = any> {
  head: Node<T> | null = null;

  insertAtBegin(val: T) {
    const node = new Node<T>(val);

    if (!this.head) {
      node.prev = null;
      node.next = null;
      this.head = node;
    } else {
      this.head.prev = node;
      node.prev = null;
      node.next = this.head;
      this.head = node;
    }
  }

  insertAtEnd(val: T) {
    const node = new Node<T>(val);

    if (!this.head) {
      node.prev = null;
      node.next = null;
      this.head = node;
    } else {
      let tempNode: Node<T> | null = this.head;

      while (tempNode?.next !== null) {
        tempNode = tempNode.next;
      }
      node.prev = tempNode;
      node.next = null;
      tempNode.next = node;
    }
  }

  insertAfter(target: T, val: T) {
    if (!this.head) {
      throw new Error("The doubly linked list is empty.");
    } else {
      let tempNode = this.head;

      while (tempNode.next !== null) {
        if (tempNode.value === target) break;
        tempNode = tempNode.next;
      }

      if (tempNode.value === target) {
        if (tempNode.next === null) {
          this.insertAtEnd(val);
        } else {
          const node = new Node<T>(val);
          node.next = tempNode.next;
          tempNode.next.prev = node;
          node.prev = tempNode;
          tempNode.next = node;
        }
      } else {
        throw new Error("Node with target value does not exist.");
      }
    }
  }

  deleteAtBegin() {
    if (!this.head) {
      throw new Error("The doubly linked list is empty");
    }

    if (this.head.next === null) {
      this.head = null;
    } else {
      const firstNode = this.head.next;
      firstNode.prev = null;
      this.head.next = null;
      this.head = firstNode;
    }
  }

  deleteAtEnd() {
    if (!this.head) {
      throw new Error("The doubly linked list is empty");
    } else {
      if (this.head.next === null) {
        this.head = null;
      } else {
        let tempNode: Node<T> = this.head;

        while (tempNode.next?.next !== null) {
          tempNode = tempNode.next as Node<T>;
        }

        tempNode.next.prev = null;
        tempNode.next = null;
      }
    }
  }

  print(): string {
    if (!this.head) {
      return "";
    }

    let result = [];
    let tempNode: Node<T> | null = this.head;
    while (tempNode !== null) {
      result.push(tempNode.value);
      tempNode = tempNode.next;
    }

    return result.join("->") || "";
  }

  print2(): string {
    if (!this.head) {
      return "";
    }

    let result = [];
    let tempNode: Node<T> | null = this.head;
    let tailNode: Node<T> | null = null;
    while (tempNode !== null) {
      result.push(tempNode.value);
      tempNode = tempNode.next;

      if (tempNode?.next === null) {
        tailNode = tempNode;
      }
    }

    while (tailNode !== null) {
      result.push(tailNode.value);
      tailNode = tailNode.prev;
    }

    return result.join("->") || "";
  }
}
