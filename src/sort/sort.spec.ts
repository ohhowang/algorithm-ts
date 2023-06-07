import { bubbleSort } from "./bubble-sort";

describe("sort tests", () => {
  it("bubble sort", () => {
    const list1 = [3, 9, -1, 10, 20];
    const list2 = [-1, 3, 9, 10, 20];
    bubbleSort(list1);
    expect(list1).toStrictEqual(list2);
  });

  it("selection sort", () => {
    const list1 = [3, 9, -1, 10, 20];
    const list2 = [-1, 3, 9, 10, 20];
    bubbleSort(list1);
    expect(list1).toStrictEqual(list2);
  });
});
