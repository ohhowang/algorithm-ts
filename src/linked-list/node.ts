export class Node<T extends any> {
  value?: T;
  next: Node<T> | null = null;

  constructor() {}
}
