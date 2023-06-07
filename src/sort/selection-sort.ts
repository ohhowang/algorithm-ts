export function selectionSort<T = any>(list: T[]) {
  let min;

  for (let i = 0; i < list.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[min] > list[j]) {
        min = j;
      }
    }
    const temp = list[i];
    list[i] = list[min];
    list[min] = temp;
  }
}
