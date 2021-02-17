import { createQueue } from "../../data-structures/queue.mjs";

export const stronglyConnectedComponents = (edgesList, nodesCount) => {
  const stronglyConnected = [];
  const visited = new Set();

  const dfs = (node, currentPath) => {
    if (visited.has(node)) {
      stronglyConnected.push(currentPath);
      return;
    }

    visited.add(node);
    edgesList
      .filter(([from]) => from === node)
      .forEach(([_, to]) => dfs(to, [...currentPath, node]));
    visited.delete(node);
  };

  dfs(edgesList[0][0], []);
  return stronglyConnected;
};
