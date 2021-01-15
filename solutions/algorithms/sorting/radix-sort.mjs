import { countingSort } from "./counting-sort.mjs";

export const radixSort = (array) => {
  const stringNums = array.map((num) => num.toString());
  const longestDigits = Math.max(...stringNums.map((x) => x.length));
  const paddedNums = stringNums.map(
    (num) => "0".repeat(longestDigits - num.length) + num
  );

  const result = [...paddedNums];
  for (let i = longestDigits - 1; i >= 0; i--) {
    const map = paddedNums.reduce((map, curr) => {
      const key = curr[i];
      map[key] = map[key] ? [...map[key], curr] : [curr];
      return map;
    }, {});

    const digits = paddedNums.map((x) => Number(x[i]));
    const sorted = countingSort(digits);
    sorted.forEach((digit, position) => {
      result[position] = map[digit].pop();
    });
  }

  return result.map(Number);
};
