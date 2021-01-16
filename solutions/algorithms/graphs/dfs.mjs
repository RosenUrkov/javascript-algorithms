export const dfs = (adjacencyList) => {
  const visitedNodes = new Set();

  const dfsRecursive = ([node]) => {
    if (visitedNodes.has(node)) {
      return;
    }

    console.log(node);
    visitedNodes.add(node);

    adjacencyList[node].toArray().forEach(dfsRecursive);
  };

  dfsRecursive([0]);
};
