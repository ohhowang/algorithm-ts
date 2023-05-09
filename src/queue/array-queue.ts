export class ArrayQueue<T extends any> {
  list: T[] = [];

  constructor() {}
  /**
   * 添加到尾部，true 异常
   */
  add(val: T) {
    this.list.push(val);
  }
  /**
   * true false
   */
  remove() {
    this.list.shift();
  }
  /**
   * 获取第一个元素，null
   */
  peek() {
    return this.list[0];
  }
}
