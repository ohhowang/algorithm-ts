import { ArrayQueue } from "./array-queue";

describe("queue test", () => {
  it("array-queue test", () => {
    const queue = new ArrayQueue<string>();
    queue.add("a");
    queue.add("b");
    expect(queue.peek()).toBe("a");
    queue.remove();
    expect(queue.peek()).toBe("b");
  });
});
