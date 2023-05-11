import { Node } from "./node";

export class SingleLinkedList<T = any> {
  head: Node<T> | null = null;

  /**
   * 在首位插入节点
   */
  insertAtBegin(val: T) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  /**
   * 在末位插入节点
   */
  insertAtEnd(val: T) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let tempNode = this.head;

      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }

      tempNode.next = node;
    }
  }

  /**
   * 在目标节点之前插入
   * @param target 要插入的目标节点
   * @param val 插入的节点
   */
  insertBefore(target: T, val: T) {
    if (!this.head) {
      throw new Error("the linked list is empty");
    } else {
      let tempNode = this.head;

      if (tempNode.value === target) {
        this.insertAtBegin(val);
      } else {
        // 遍历查找出目标节点的前一个节点
        while (tempNode.next !== null) {
          if (tempNode.next.value === target) {
            break;
          }
          tempNode = tempNode.next;
        }

        // 如果 tempNode 不为空，找到目标节点
        if (tempNode && tempNode.next?.value === target) {
          const node = new Node(val);
          node.next = tempNode.next;
          tempNode.next = node;
        } else {
          throw new Error("not found target node");
        }
      }
    }
  }

  /**
   * 插入到目标节点后
   * @param target 目标节点
   * @param val 插入的节点的值
   */
  insertAfter(target: T, val: T) {
    let tempNode = this.head;

    if (!this.head) {
      throw new Error("the linked list is empty");
    } else {
      // 遍历查找出目标节点
      while (tempNode !== null) {
        if (tempNode.value === target) {
          break;
        }
        tempNode = tempNode.next;
      }

      // 如果 tempNode 不为空，找到目标节点
      if (tempNode && tempNode.value === target) {
        const node = new Node(val);
        node.next = tempNode.next;
        tempNode.next = node;
      } else {
        throw new Error("not found target node");
      }
    }
  }

  /**
   * 删除首位
   */
  deleteAtBegin() {
    if (!this.head) {
      throw new Error("the linked list is empty");
    } else {
      const tempNode = this.head;
      this.head = tempNode.next;
      tempNode.next = null;
    }
  }

  /**
   * 删除末位
   */
  deleteAtEnd() {
    if (!this.head) {
      throw new Error("the linked list is empty");
    } else {
      let tempNode = this.head;

      if (tempNode.next === null) {
        this.deleteAtBegin();
      } else {
        while (tempNode.next?.next !== null) {
          tempNode = tempNode.next!;
        }
        tempNode.next = null;
      }
    }
  }

  /**
   * 修改节点数据
   * @param target
   * @param val
   */
  update(target: T, val: T) {
    const node = this.findNode(target);

    if (node) {
      node.value = val;
    }
  }

  /**
   * 通过 value 查找节点
   */
  findNode(val: T): Node<T> | null {
    let tempNode = this.head;

    while (tempNode !== null) {
      if (tempNode.value === val) {
        return tempNode;
      }
      tempNode = tempNode.next;
    }

    return null;
  }

  /**
   * 遍历
   */
  print(): string {
    let tempNode = this.head;

    // 链表为空，直接返回
    if (!tempNode) return "";

    let values: (T | undefined)[] = [];
    while (tempNode !== null) {
      values.push(tempNode.value);
      tempNode = tempNode.next;
    }

    return values.join("->") || "";
  }

  /**
   * 反转列表
   */
  reverse() {
    if (!this.head) {
      throw new Error("the linked list is empty");
    } else {
      let cur: Node<T> = this.head;
      let prev: Node<T> | null = null;
      let temp: Node<T> | null = null;

      while (cur !== null) {
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp as Node<T>;
      }
      this.head = prev;
    }
  }
}
