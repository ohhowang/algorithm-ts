import { ArrayQueue } from "./array-queue";
import { CircleQueue } from "./circle-queue";

describe("queue test", () => {
  it("array-queue", () => {
    const queue = new ArrayQueue<string>();
    queue.add("a");
    queue.add("b");
    expect(queue.peek()).toBe("a");
    queue.remove();
    expect(queue.peek()).toBe("b");
  });

  it("circle-queue is empty", () => {
    const queue = new CircleQueue<number>(3);
    expect(queue.isEmpty()).toBe(true);
  });

  it("circle-queue is full", () => {
    const queue = new CircleQueue<number>(3);
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.isFull()).toBe(true);
    expect(() => queue.add(4)).toThrowError("the queue is full");
  });

  it("circle-queue pop", () => {
    const queue = new CircleQueue<number>(3);
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(() => queue.pop()).toThrowError("the queue is empty");
  });
});
