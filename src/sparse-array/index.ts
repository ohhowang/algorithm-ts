/**
 * 一维数组
 * T: 元组项
 * N: 数组长度
 */
type TupleArray<T, N extends number> = [T, ...T[]] & { length: N };

/**
 * 二维数组
 * T: 元组项
 * R: row 二维数组中项格式
 * C: column 二维数组中项个数
 */
export type TupleBoard<T, R extends number, C extends number> = TupleArray<TupleArray<T, C>, R>;

/**
 * 根据传入的数
 */
type Count<N extends number> = TupleArray<number, N>["length"];

/**
 * 生成棋盘
 * @param row
 * @param col
 * @returns
 * let chessArr: TupleBoard<number, typeof row, typeof col> = generateBoard<typeof row, typeof col>(row, col);
 */
function generateBoard<R extends number, C extends number>(
  row: R,
  col: C,
): TupleBoard<number, R, C> {
  let colArr: TupleArray<number, C> = Array.from({ length: col }).map(() => 0) as TupleArray<
    number,
    C
  >;
  let rowArr: TupleArray<number, C>[] = [];

  for (let i = 0; i < row; i++) {
    rowArr.push(colArr);
  }

  return rowArr as TupleBoard<number, R, C>;
}

/**
 * 展开稀疏数组
 * @param sparseArray 稀疏数组
 */
export function parseSparseArray(sparseArray: number[][]): number[][] {
  const row = sparseArray[0][0];
  const col = sparseArray[0][1];
  const array = Array.from({ length: row }).map(() => Array.from({ length: col }).map(() => 0));

  for (let i = 1; i < sparseArray.length; i++) {
    const item = sparseArray[i];
    array[item[0]][item[1]] = item[2];
  }

  return array;
}

/**
 * 生成稀疏数组
 * @param board 棋盘
 */
export function generateSparseArray<T extends number[][]>(board: T): number[][] {
  let count: number = 0;
  let sparseArray: number[][] = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        if (!sparseArray[count + 1]) sparseArray[count + 1] = [];

        sparseArray[count + 1][0] = i;
        sparseArray[count + 1][1] = j;
        sparseArray[count + 1][2] = board[i][j];

        count++;
      }
    }
  }

  if (!sparseArray[0]) sparseArray[0] = [];
  sparseArray[0][0] = board.length;
  sparseArray[0][1] = board[0]?.length || 0;
  sparseArray[0][2] = count;

  return sparseArray;
}
