export const floydWarshall = (edgesList, nodesCount) => {
  const distances = Array.from({ length: nodesCount + 1 }).map(() =>
    Array.from({ length: nodesCount + 1 }).map(() => Number.MAX_SAFE_INTEGER)
  );

  const path = Array.from({ length: nodesCount + 1 }).map(() =>
    Array.from({ length: nodesCount + 1 }).map(() => null)
  );

  for (let i = 1; i < nodesCount + 1; i++) {
    distances[i][i] = 0;
  }

  edgesList.forEach((edge) => {
    const [from, to, weight] = edge;

    distances[from][to] = weight;
    path[from][to] = from;
  });

  for (let i = 1; i < nodesCount + 1; i++) {
    for (let j = 1; j < nodesCount + 1; j++) {
      for (let k = 1; k < nodesCount + 1; k++) {
        if (distances[i][j] > distances[i][k] + distances[k][j]) {
          distances[i][j] = distances[i][k] + distances[k][j];
          path[i][j] = path[k][j];
        }
      }
    }
  }

  console.table(distances);
  console.table(path);

  return {
    distances,
    path,
  };
};
