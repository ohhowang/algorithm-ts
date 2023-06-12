import { bubbleSort } from "./bubble-sort";
import { insertionSort } from "./insertion-sort";

describe("sort tests", () => {
  it("bubble sort", () => {
    const list1 = [20, 9, 3, 10, -1];
    const list2 = [-1, 3, 9, 10, 20];
    bubbleSort(list1);
    expect(list1).toStrictEqual(list2);
  });

  it("selection sort", () => {
    const list1 = [20, 9, 3, 10, -1];
    const list2 = [-1, 3, 9, 10, 20];
    bubbleSort(list1);
    expect(list1).toStrictEqual(list2);
  });

  it("insertion sort", () => {
    const list1 = [20, 9, 3, 10, -1];
    const list2 = [-1, 3, 9, 10, 20];
    insertionSort(list1);
    expect(list1).toStrictEqual(list2);
  });
});
