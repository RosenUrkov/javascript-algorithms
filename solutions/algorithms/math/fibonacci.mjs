import { createHashMap } from "../../data-structures/hash-map.mjs";

export const fibonacci = (() => {
  const memo = createHashMap();
  memo.set(1, 1);
  memo.set(2, 1);

  return (number) => {
    if (memo.has(number)) {
      return memo.get(number);
    }

    const first = fibonacci(number - 1);
    const second = fibonacci(number - 2);

    return memo.set(number, first + second);
  };
})();
