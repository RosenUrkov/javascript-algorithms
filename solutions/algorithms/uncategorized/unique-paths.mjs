export const uniquePathsDP = (rows, cols) => {
  const maze = Array.from({ length: rows }).map(() => {
    return Array.from({ length: cols }).map(() => 0);
  });

  maze[0][1] = 1;
  maze[1][0] = 1;

  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[0].length; col++) {
      if ((row === 0 && col === 1) || (row === 1 && col === 0)) {
        continue;
      }

      const topPaths = row - 1 >= 0 ? maze[row - 1][col] : 0;
      const leftPaths = col - 1 >= 0 ? maze[row][col - 1] : 0;

      maze[row][col] = topPaths + leftPaths;
    }
  }

  console.table(maze);
  return maze[maze.length - 1][maze[0].length - 1];
};

export const uniquePathsR = (rows, cols) => {
  const uniquePathsRecursive = (row, col) => {
    if (row === rows - 1 && col === cols - 1) {
      return 1;
    }
    if (row === rows || col === cols) {
      return 0;
    }

    const botPaths = uniquePathsRecursive(row + 1, col);
    const rightPaths = uniquePathsRecursive(row, col + 1);

    return botPaths + rightPaths;
  };

  return uniquePathsRecursive(0, 0);
};
