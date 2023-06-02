import { Stack } from "./stack";

describe("array stack", () => {
  it("The stack tests", () => {
    const stack = new Stack(3);
    stack.push(3);
    expect(stack.print()).toBe("3");
    stack.push(2);
    expect(stack.print()).toBe("2->3");
    stack.push(1);
    expect(stack.print()).toBe("1->2->3");
    expect(() => stack.push(4)).toThrowError("The stack is full.");
    stack.pop();
    expect(stack.print()).toBe("2->3");
    stack.pop();
    expect(stack.print()).toBe("3");
    stack.pop();
    expect(stack.print()).toBe("");
    expect(() => stack.pop()).toThrowError("The stack is empty.");
  });
});
