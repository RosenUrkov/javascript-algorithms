export const nQueensProblem = (queens) => {
  const maze = Array.from({ length: queens }).map(() => {
    return Array.from({ length: queens }).map(() => 0);
  });

  const colsMarked = Array.from({ length: queens }).map(() => false);

  const isPositionSafe = (row, col) => {
    if (colsMarked[col]) {
      return false;
    }

    // check up-left diagonal
    let ulRow = row;
    let ulCol = col;
    while (ulRow >= 0 && ulCol >= 0) {
      if (maze[ulRow][ulCol]) {
        return false;
      }

      ulRow--;
      ulCol--;
    }

    // check up-right diagonal
    let urRow = row;
    let urCol = col;
    while (urRow >= 0 && urCol < maze.length) {
      if (maze[urRow][urCol]) {
        return false;
      }

      urRow--;
      urCol++;
    }

    return true;
  };

  const placeQueenRecursive = (queenNumber, row, col) => {
    maze[row][col] = 1;
    colsMarked[col] = true;

    if (queenNumber === 0) {
      console.table(maze);
      return true;
    }

    let nRow = row + 1;
    let nCol = (col + 1) % maze.length;
    while (!isPositionSafe(nRow, nCol) && nCol !== col) {
      nCol = (nCol + 1) % maze.length;
    }

    if (nCol === col) {
      // there is no good next position
      // return to the base
      maze[row][col] = 0;
      colsMarked[col] = false;

      return false;
    }

    const result = placeQueenRecursive(queenNumber - 1, nRow, nCol);

    maze[row][col] = 0;
    colsMarked[col] = false;

    return result;
  };

  for (let i = 0; i < maze.length; i++) {
    if (placeQueenRecursive(queens - 1, 0, i)) {
      return true;
    }
  }

  return false;
};
