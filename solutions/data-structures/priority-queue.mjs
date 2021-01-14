import { createHeap } from "./heap.mjs";

export const createPriorityQueue = () => {
  const buffer = createHeap();

  const isEmpty = () => {
    return buffer.isEmpty();
  };

  const peek = () => {
    return buffer.peek();
  };

  const enqueue = (value) => {
    return buffer.add(value);
  };

  const dequeue = () => {
    return buffer.getTop();
  };

  return {
    isEmpty,
    peek,
    enqueue,
    dequeue,
  };
};
