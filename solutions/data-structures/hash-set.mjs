import { createHashMap } from "./hash-map.mjs";

export const createHashSet = () => {
  const hashMap = createHashMap();

  const has = (value) => {
    return hashMap.has(value);
  };

  const add = (value) => {
    if (hashMap.has(value)) {
      return false;
    }

    hashMap.set(value, value);
    return true;
  };

  const remove = (value) => {
    if (!hashMap.has(value)) {
      return false;
    }

    hashMap.remove(value);
    return true;
  };

  return {
    get count() {
      return hashMap.count;
    },
    has,
    add,
    remove,
  };
};
