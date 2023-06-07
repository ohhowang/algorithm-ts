import { LinkedQueue } from "./linked-queue";

describe("linked queue test", () => {
  it("Adding node to linked queue.", () => {
    const queue = new LinkedQueue<number>();
    expect(queue.print()).toBe("");
    queue.push(1);
    expect(queue.print()).toBe("1");
    queue.push(2);
    expect(queue.print()).toBe("1->2");
  });

  it("Pop node from linked queue.", () => {
    const queue = new LinkedQueue<number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.print()).toBe("1->2->3");
    queue.pop();
    expect(queue.print()).toBe("2->3");
    queue.pop();
    expect(queue.print()).toBe("3");
    queue.pop();
    expect(queue.print()).toBe("");
    expect(() => queue.pop()).toThrowError("The linked queue is empty.");
  });
});
