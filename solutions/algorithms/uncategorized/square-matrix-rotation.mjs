import { matrices } from "../math/matrices.mjs";

export const squareMatrixRotation = (matrix) => {
  return matrices.transposing(matrix).map((row) => row.reverse());
};

const input = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
