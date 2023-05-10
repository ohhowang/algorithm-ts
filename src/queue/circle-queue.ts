export class CircleQueue<T extends any> {
  private front = 0;
  private rear = 0;
  private capacity = 0;
  private list: T[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.list = new Array<T>(capacity);
  }

  isFull() {
    return this.rear === this.front && !!this.list[this.front];
  }

  isEmpty() {
    return this.rear === this.front && !this.list[this.front];
  }

  add(val: T) {
    if (this.isFull()) throw new Error("the queue is full");

    this.list[this.rear] = val;
    this.rear = (this.rear + 1 + this.capacity) % this.capacity;
  }

  pop(): T {
    if (this.isEmpty()) throw new Error("the queue is empty");

    const value = this.list[this.front];
    this.list[this.front] = null as any;
    this.front = (this.front + 1 + this.capacity) % this.capacity;
    return value;
  }
}
