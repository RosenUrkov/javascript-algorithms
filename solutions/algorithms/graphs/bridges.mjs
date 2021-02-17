import { kruskal } from "./kruskal.mjs";

export const bridges = (edgesList, nodesCount) => {
  const { treesCount: originalTrees } = kruskal(edgesList, nodesCount);

  const bridges = [];
  for (let edgeIndex = 0; edgeIndex < edgesList.length; edgeIndex += 2) {
    const filteredEdges = edgesList.filter(
      (_, index) => index !== edgeIndex && index !== edgeIndex + 1
    );

    const { treesCount } = kruskal(filteredEdges, nodesCount);
    if (treesCount !== originalTrees) {
      bridges.push(edgesList[edgeIndex]);
    }
  }

  return bridges;
};
