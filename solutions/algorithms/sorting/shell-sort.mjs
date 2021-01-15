export const shellSort = (array) => {
  const copy = [...array];

  let interval = Math.floor(copy.length / 2);
  while (interval > 0) {
    for (let i = interval; i < copy.length; i++) {
      let swapIndex = i;

      while (swapIndex >= 0) {
        if (copy[swapIndex] < copy[swapIndex - interval]) {
          [copy[swapIndex], copy[swapIndex - interval]] = [
            copy[swapIndex - interval],
            copy[swapIndex],
          ];
        }

        swapIndex -= interval;
      }
    }

    interval = Math.floor(interval / 2);
  }

  return copy;
};
