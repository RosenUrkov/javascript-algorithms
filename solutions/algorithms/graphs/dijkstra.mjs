import { createPriorityQueue } from "../../data-structures/priority-queue.mjs";

export const dijkstra = (startNode, adjacencyList) => {
  const queue = createPriorityQueue((x, y) => x.distance < y.distance);
  const shortestPaths = Array.from({ length: adjacencyList.length }).map(
    () => Number.MAX_SAFE_INTEGER
  );
  const usedNodes = new Set();

  shortestPaths[startNode] = 0;
  queue.enqueue({ node: startNode, distance: 0 });

  while (!queue.isEmpty()) {
    const { node } = queue.dequeue();

    if (usedNodes.has(node)) {
      continue;
    }

    usedNodes.add(node);

    adjacencyList[node].toArray().forEach(([to, weight]) => {
      const currDistance = shortestPaths[to];
      const newDistance = shortestPaths[node] + weight;

      if (newDistance < currDistance) {
        shortestPaths[to] = newDistance;
        queue.enqueue({ node: to, distance: newDistance });
      }
    });
  }

  return shortestPaths;
};
