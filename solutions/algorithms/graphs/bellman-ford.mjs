export const bellmanFord = (startNode, edgesList, nodesCount) => {
  const distances = Array.from({ length: nodesCount + 1 }).map(
    () => Number.MAX_SAFE_INTEGER
  );
  const parents = Array.from({ length: nodesCount + 1 }).map(() => null);
  distances[startNode] = 0;

  for (let i = 0; i < nodesCount - 1; i++) {
    for (let j = 0; j < edgesList.length; j++) {
      const [from, to, weight] = edgesList[j];

      if (distances[to] > distances[from] + weight) {
        distances[to] = distances[from] + weight;
        parents[to] = from;
      }
    }
  }

  let negativeWeightCycle = false;

  // detect negative weight cycles
  for (let j = 0; j < edgesList.length; j++) {
    const [from, to, weight] = edgesList[j];

    if (distances[to] > distances[from] + weight) {
      negativeWeightCycle = true;
    }
  }

  return {
    distances,
    parents,
    negativeWeightCycle,
  };
};
