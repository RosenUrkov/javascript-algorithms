export const jumpGame = (array) => {
  const jumpsMapping = array.map(() => 0);
  jumpsMapping[0] = 1;

  for (let i = 0; i < array.length; i++) {
    const jumpsCount = array[i];
    for (let j = 0; j < jumpsCount; j++) {
      if (i + j + 1 >= array.length) {
        break;
      }

      jumpsMapping[i + j + 1] += 1;
    }
  }

  return jumpsMapping[jumpsMapping.length - 1] > 0;
};
