export const knightsTour = (boardSize) => {
  const moves = [
    { row: -2, col: -1 },
    { row: -1, col: -2 },
    { row: 1, col: -2 },
    { row: 2, col: -1 },
    { row: 2, col: 1 },
    { row: 1, col: 2 },
    { row: -1, col: 2 },
    { row: -2, col: 1 },
  ];

  const visited = Array.from({ length: boardSize }).map(() => {
    return Array.from({ length: boardSize }).map(() => false);
  });

  let knightMoves = 0;

  const moveKnightRecursive = (row, col) => {
    visited[row][col] = true;
    knightMoves++;

    if (knightMoves === boardSize ** 2) {
      console.table(visited);
      return true;
    }

    for (let i = 0; i < moves.length; i++) {
      const newRow = row + moves[i].row;
      const newCol = col + moves[i].col;

      if (
        newRow < 0 ||
        newRow >= boardSize ||
        newCol < 0 ||
        newCol >= boardSize ||
        visited[newRow][newCol]
      ) {
        continue;
      }

      if (moveKnightRecursive(newRow, newCol)) {
        return true;
      }
    }

    visited[row][col] = false;
    knightMoves--;

    return false;
  };

  return moveKnightRecursive(0, 0);
};
