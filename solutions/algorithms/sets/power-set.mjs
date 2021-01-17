export const powerSet = (number) => {
  if (number === 0) {
    return [[]];
  }

  const setsBeforeNum = powerSet(number - 1);
  const setsWithNum = setsBeforeNum.slice().map((set) => [...set, number]);

  return setsBeforeNum.concat(setsWithNum);
};
