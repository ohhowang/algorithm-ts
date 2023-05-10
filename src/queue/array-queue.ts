export class ArrayQueue<T extends any> {
  front = -1;
  rear = -1;
  list: T[] = [];

  constructor() {
    this.front = 0;
    this.rear = 0;
  }

  /**
   * 添加到尾部，true 异常
   */
  add(val: T) {
    this.list.push(val);
    this.rear++;
  }

  /**
   * true false
   */
  remove() {
    // this.list.shift();
    if (this.front === this.rear) return;

    for (let i = 0; i < this.rear; i++) {
      this.list[i] = this.list[i + 1];
    }
    this.rear--;
  }

  /**
   * 获取第一个元素，null
   */
  peek() {
    return this.list[0];
  }
}
