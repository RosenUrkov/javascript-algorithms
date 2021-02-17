import { graph } from "../../data-structures/graph.mjs";

export const detectCycle = (adjacencyList, nodesCount) => {
  const whiteSet = new Set();
  const greySet = new Set();
  const blackSet = new Set();

  for (let i = 1; i <= nodesCount; i++) {
    whiteSet.add(i);
  }

  const startNode = 1;

  const detectCycleRecursive = (currNode) => {
    if (greySet.has(currNode)) {
      return true;
    }

    whiteSet.delete(currNode);
    greySet.add(currNode);

    const adjacent = adjacencyList[currNode].toArray();
    const cycleFound = adjacent.length
      ? adjacent.some(([to]) => detectCycleRecursive(to))
      : false;

    greySet.delete(currNode);
    blackSet.add(currNode);

    return cycleFound;
  };

  return detectCycleRecursive(startNode);
};
