export const towerOfHanoi = (discs, from, middle, to) => {
  if (discs === 1) {
    console.log(`Moving ${discs} from ${from} to ${to}`);
    return;
  }

  towerOfHanoi(discs - 1, from, to, middle);
  console.log(`Moving ${discs} from ${from} to ${to}`);
  towerOfHanoi(discs - 1, middle, from, to);
};

towerOfHanoi(3, "A", "B", "C");
