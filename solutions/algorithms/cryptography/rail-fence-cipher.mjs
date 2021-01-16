export const railFenceCipher = (string, fences = 3) => {
  const punctuationSymbols = [" ", ",", ".", "!", "?"];
  const rail = Array.from({ length: fences }).map(() => []);

  let fenceSwitcher = 1;
  let currentFenceIndex = 0;
  for (let index = 0; index < string.length; index++) {
    if (punctuationSymbols.includes(string[index])) {
      continue;
    }

    rail[currentFenceIndex].push(string[index]);

    if (currentFenceIndex === rail.length - 1 && fenceSwitcher === 1) {
      fenceSwitcher = -1;
    } else if (currentFenceIndex === 0 && fenceSwitcher === -1) {
      fenceSwitcher = 1;
    }

    currentFenceIndex += fenceSwitcher;
  }

  return rail.reduce((hash, curr) => hash + curr.join(""), "");
};
