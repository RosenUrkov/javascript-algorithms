import { createPriorityQueue } from "../../data-structures/priority-queue.mjs";

export const prim = (edgesList) => {
  const queue = createPriorityQueue((x, y) => x[2] < y[2]);

  const startNode = 1;
  const usedNodes = new Set();
  const resultEdges = [];

  usedNodes.add(startNode);
  edgesList.filter((x) => x[0] === startNode).forEach(queue.enqueue);

  while (!queue.isEmpty()) {
    const edge = queue.dequeue();
    const [from, to] = edge;

    if (usedNodes.has(to)) {
      continue;
    }

    usedNodes.add(to);
    resultEdges.push(edge);

    edgesList
      .filter((x) => x[0] === to)
      .filter((x) => !resultEdges.includes(x))
      .forEach(queue.enqueue);
  }

  return resultEdges;
};
