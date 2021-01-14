import { createDoublyLinkedList } from "./doubly-linked-list.mjs";

export const createDeque = () => {
  const buffer = createDoublyLinkedList();

  const isEmpty = () => {
    return buffer.isEmpty();
  };

  const peakFront = () => {
    return buffer.head?.value;
  };

  const peakBack = () => {
    return buffer.tail?.value;
  };

  const unshift = (value) => {
    return buffer.prepend(value).value;
  };

  const shift = () => {
    return buffer.removeHead()?.value;
  };

  const push = (value) => {
    return buffer.append(value).value;
  };

  const pop = () => {
    return buffer.removeTail()?.value;
  };

  return {
    isEmpty,
    peakFront,
    peakBack,
    unshift,
    shift,
    push,
    pop,
  };
};
