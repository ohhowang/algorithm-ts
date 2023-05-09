import { TupleBoard, generateSparseArray, parseSparseArray } from ".";

describe("sparse array", () => {
  it("test", () => {
    const originRow = 2;
    const originCol = 3;
    let board: TupleBoard<number, typeof originRow, typeof originCol> = [
      [0, 1, 0],
      [0, 0, 2],
    ];

    const sparseArray =
      generateSparseArray<TupleBoard<number, typeof originRow, typeof originCol>>(board);
    expect(sparseArray).toStrictEqual([
      [2, 3, 2],
      [0, 1, 1],
      [1, 2, 2],
    ]);

    const parseArray = parseSparseArray(sparseArray);
    expect(parseArray).toStrictEqual([
      [0, 1, 0],
      [0, 0, 2],
    ]);
  });
});
