import { createQueue } from "../../data-structures/queue.mjs";

export const bfs = (tree) => {
  const queue = createQueue();

  queue.enqueue(tree);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    console.log(node.value);
    node.children.forEach(queue.enqueue);
  }
};
