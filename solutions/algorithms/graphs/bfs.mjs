import { createQueue } from "../../data-structures/queue.mjs";

export const bfs = (adjacencyList) => {
  const queue = createQueue();
  const visitedNodes = new Set();

  queue.enqueue([0]);

  while (!queue.isEmpty()) {
    const [node] = queue.dequeue();

    if (visitedNodes.has(node)) {
      continue;
    }

    console.log(node);
    visitedNodes.add(node);

    adjacencyList[node].toArray().forEach(queue.enqueue);
  }
};
