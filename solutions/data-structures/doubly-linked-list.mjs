const createDoublyLinkedNode = (value, prev = null, next = null) => {
  return {
    value,
    prev,
    next,
  };
};

export const createDoublyLinkedList = (
  compareFn = (x, y) => Object.is(x, y)
) => {
  let head = null;
  let tail = null;

  const isEmpty = () => {
    return head === null && tail === null;
  };

  const prepend = (value) => {
    if (isEmpty()) {
      const newNode = createDoublyLinkedNode(value);

      head = newNode;
      tail = newNode;

      return newNode;
    }

    return insertBefore(head, value);
  };

  const append = (value) => {
    if (isEmpty()) {
      const newNode = createDoublyLinkedNode(value);

      head = newNode;
      tail = newNode;

      return newNode;
    }

    return insertAfter(tail, value);
  };

  const insertBefore = (node, value) => {
    const newNode = createDoublyLinkedNode(value, node.prev, node);
    newNode.next.prev = newNode;

    if (node === head) {
      head = newNode;
    } else {
      newNode.prev.next = newNode;
    }

    return newNode;
  };

  const insertAfter = (node, value) => {
    const newNode = createDoublyLinkedNode(value, node, node.next);
    newNode.prev.next = newNode;

    if (node === tail) {
      tail = newNode;
    } else {
      newNode.next.prev = newNode;
    }

    return newNode;
  };

  const find = (value) => {
    let tempNode = head;

    while (tempNode !== null) {
      if (compareFn(value, tempNode.value)) {
        return tempNode;
      }

      tempNode = tempNode.next;
    }

    return null;
  };

  const contains = (value) => {
    return !!find(value);
  };

  const removeHead = () => {
    return removeNode(head);
  };

  const removeTail = () => {
    return removeNode(tail);
  };

  const removeValue = (value) => {
    const node = find(value);
    return removeNode(node);
  };

  const removeNode = (node) => {
    if (node === null) {
      return null;
    }
    if (node === head && node === tail) {
      head = null;
      tail = null;
      return node;
    }
    if (node === head) {
      head = node.next;
      head.prev = null;
      return node;
    }
    if (node === tail) {
      tail = node.prev;
      tail.next = null;
      return node;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
  };

  const reverse = () => {
    if (isEmpty || head === tail) {
      return head;
    }

    let tempNode = tail;
    head = null;
    tail = null;

    while (tempNode !== null) {
      append(tempNode.value);
      tempNode = tempNode.prev;
    }

    return head;
  };

  const fromArray = (array) => {
    array.forEach((element) => append(element));
    return head;
  };

  const toArray = () => {
    const result = [];

    let tempNode = head;
    while (tempNode !== null) {
      result.push(tempNode.value);
      tempNode = tempNode.next;
    }

    return result;
  };

  const toString = () => {
    return toArray().join(", ");
  };

  return {
    get head() {
      return head;
    },
    get tail() {
      return tail;
    },
    isEmpty,
    prepend,
    append,
    insertBefore,
    insertAfter,
    find,
    contains,
    removeHead,
    removeTail,
    removeValue,
    removeNode,
    reverse,
    fromArray,
    toArray,
    toString,
  };
};
