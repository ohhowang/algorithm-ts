export class Node<T = any> {
  value: T;
  prev: Node<T> | null = null;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
