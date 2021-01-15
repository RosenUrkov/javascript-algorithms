import { createHeap } from "../../data-structures/heap.mjs";

export const heapSort = (array) => {
  const heap = createHeap();
  array.forEach(heap.add);

  const result = [];
  while (!heap.isEmpty()) {
    result.push(heap.getTop());
  }

  return result;
};
