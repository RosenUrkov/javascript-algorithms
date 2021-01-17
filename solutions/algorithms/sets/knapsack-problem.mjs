export const knapsackProblem = (items, capacity) => {
  const matrix = Array.from({ length: capacity + 1 }).map(() =>
    Array.from({ length: items.length }).map(() => 0)
  );

  for (let item = 1; item < matrix[0].length; item++) {
    for (let cap = 1; cap < matrix.length; cap++) {
      const { value, weight } = items[item];

      if (weight > cap) {
        matrix[cap][item] = matrix[cap][item - 1];
        continue;
      }

      matrix[cap][item] = Math.max(
        value + matrix[cap - weight][item - 1],
        matrix[cap][item - 1]
      );
    }
  }

  console.table(matrix);
};

const items = [
  { value: 0, weight: 0 },
  { value: 5, weight: 5 },
  { value: 6, weight: 8 },
  { value: 8, weight: 6 },
  { value: 2, weight: 3 },
];

console.log(knapsackProblem(items, 15));
