export const createHeap = (compareFn = (x, y) => x < y) => {
  const buffer = [null];

  const isEmpty = () => {
    return buffer.length === 1;
  };

  const contains = (value) => {
    return buffer.includes(value);
  };

  const peek = () => {
    return buffer[1];
  };

  const getTop = () => {
    const topElement = peek();

    if (!isEmpty()) {
      const lowestElement = buffer.splice(buffer.length - 1, 1)[0];
      heapifyDown(1, lowestElement);
    }

    return topElement;
  };

  const add = (value) => {
    buffer.push(value);
    heapifyUp(buffer.length - 1, value);

    return value;
  };

  const heapifyUp = (index, value) => {
    let currentIndex = index;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex >= 1 && compareFn(value, buffer[parentIndex])) {
      buffer[currentIndex] = buffer[parentIndex];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }

    buffer[currentIndex] = value;
  };

  const heapifyDown = (index, value) => {
    let currentIndex = index;

    while (currentIndex * 2 + 1 < buffer.length) {
      const childIndex = compareFn(
        buffer[currentIndex * 2],
        buffer[currentIndex * 2 + 1]
      )
        ? currentIndex * 2
        : currentIndex * 2 + 1;

      if (compareFn(buffer[childIndex], value)) {
        buffer[currentIndex] = buffer[childIndex];
        currentIndex = childIndex;
      } else {
        break;
      }
    }

    if (currentIndex * 2 < buffer.length) {
      const childIndex = index * 2;

      if (compareFn(buffer[childIndex], value)) {
        buffer[currentIndex] = buffer[childIndex];
        currentIndex = childIndex;
      }
    }

    if (!isEmpty()) {
      buffer[currentIndex] = value;
    }
  };

  return {
    isEmpty,
    peek,
    getTop,
    add,
    contains,
  };
};
