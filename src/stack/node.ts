export class Node<T = any> {
  value: T;
  next: Node<T> | null = null;

  constructor(val: T) {
    this.value = val;
  }
}
