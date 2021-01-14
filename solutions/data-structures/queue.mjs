import { createDoublyLinkedList } from "./doubly-linked-list.mjs";

export const createQueue = () => {
  const buffer = createDoublyLinkedList();

  const isEmpty = () => {
    return buffer.isEmpty();
  };

  const peak = () => {
    return buffer.tail?.value;
  };

  const enqueue = (value) => {
    return buffer.append(value).value;
  };

  const dequeue = () => {
    return buffer.removeHead()?.value;
  };

  return {
    isEmpty,
    peak,
    enqueue,
    dequeue,
  };
};
