import { createQueue } from "../../data-structures/queue.mjs";

export const topologicalSorting = (edgesList, nodesCount) => {
  const startNodes = new Set();
  const endNodes = new Set();

  edgesList.forEach(([from, to]) => {
    startNodes.add(from);
    endNodes.add(to);
  });

  const queue = createQueue();
  for (const node of startNodes.values()) {
    if (!endNodes.has(node)) {
      queue.enqueue(node);
    }
  }

  const orderedNodes = [];
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    orderedNodes.push(node);

    const otherPossibleDeps = edgesList.filter(
      ([from]) => !orderedNodes.includes(from)
    );

    edgesList
      .filter(([from]) => from === node)
      .map(([_, to]) => to)
      .filter((nextNode) =>
        otherPossibleDeps.every(([_, to]) => to !== nextNode)
      )
      .forEach(queue.enqueue);
  }

  return orderedNodes;
};
