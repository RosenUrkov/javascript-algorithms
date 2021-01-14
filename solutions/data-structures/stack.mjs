export const createStack = () => {
  const buffer = [];

  const isEmpty = () => {
    return buffer.length === 0;
  };

  const peak = () => {
    return buffer[buffer.length - 1];
  };

  const push = (value) => {
    buffer.push(value);
    return value;
  };

  const pop = () => {
    return buffer.splice(buffer.length - 1, 1)[0];
  };

  return {
    isEmpty,
    peak,
    push,
    pop,
  };
};
