import { polynomialHash } from "../algorithms/cryptography/polynomial-hash.mjs";
import { createDoublyLinkedList } from "./doubly-linked-list.mjs";

export const createHashMap = () => {
  const initialBufferSize = 16;
  const resizeCoeff = 0.7;
  const comparer = (x, y) => x.key === y.key;

  let count = 0;
  let bufferSize = initialBufferSize;
  let buffer = Array.from({ length: bufferSize }).map(() =>
    createDoublyLinkedList(comparer)
  );

  const hash = (key) => {
    const stringKey = JSON.stringify(key);
    return polynomialHash(stringKey);
  };

  const hashToIndex = (hash) => {
    return hash % buffer.length;
  };

  const has = (key) => {
    return !!get(key);
  };

  const get = (key) => {
    const index = hashToIndex(hash(key));
    const list = buffer[index];
    const target = { key };

    return list.find(target)?.value?.val;
  };

  const set = (key, val) => {
    const index = hashToIndex(hash(key));
    const list = buffer[index];
    const keyValuePair = { key, val };

    const node = list.find(keyValuePair);
    if (node) {
      return node.value.val;
    }

    list.append(keyValuePair);
    count++;

    if (count / bufferSize >= resizeCoeff) {
      resize(bufferSize * 2);
    }

    return val;
  };

  const remove = (key) => {
    const index = hashToIndex(hash(key));
    const list = buffer[index];
    const target = { key };

    const node = list.find(target);
    if (!node) {
      return;
    }

    list.removeNode(node).value.val;
    count--;

    return node.value.val;
  };

  const resize = (newSize) => {
    const oldBuffer = buffer;
    bufferSize = newSize;
    count = 0;

    buffer = Array.from({ length: newSize }).map(() =>
      createDoublyLinkedList(comparer)
    );

    oldBuffer.forEach((list) => {
      list.toArray().forEach((el) => set(el.key, el.val));
    });
  };

  return {
    get count() {
      return count;
    },
    has,
    get,
    set,
    remove,
  };
};
