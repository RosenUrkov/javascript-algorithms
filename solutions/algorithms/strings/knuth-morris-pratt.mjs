const precomputeKMP = (string) => {
  const failLinks = Array.from({ length: string.length + 1 });
  failLinks[0] = -1;
  failLinks[1] = 0;

  for (let i = 1; i < string.length; i++) {
    let lastMatchIndex = failLinks[i];
    while (lastMatchIndex >= 0 && string[i] !== string[lastMatchIndex]) {
      lastMatchIndex = failLinks[lastMatchIndex];
    }

    failLinks[i + 1] = lastMatchIndex + 1;
  }

  return failLinks;
};

export const knuthMorrisPratt = (pattern, text) => {
  const matches = [];
  const failLinks = precomputeKMP(pattern);
  console.log(failLinks);

  let lastMatchIndex = 0;
  for (let i = 0; i < text.length; i++) {
    while (lastMatchIndex >= 0 && pattern[lastMatchIndex] !== text[i]) {
      lastMatchIndex = failLinks[lastMatchIndex];
    }

    lastMatchIndex++;

    if (lastMatchIndex === pattern.length) {
      matches.push(i - lastMatchIndex + 1);
      lastMatchIndex = failLinks[lastMatchIndex];
    }
  }

  return matches;
};
