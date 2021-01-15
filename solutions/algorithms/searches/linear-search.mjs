export const linearSearch = (arr, target) => {
  return arr.findIndex((x) => Object.is(x, target));
};
