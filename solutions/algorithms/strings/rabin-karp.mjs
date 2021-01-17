const checkSubString = (pattern, text, startIndex) => {
  for (let index = 0; index < pattern.length; index++) {
    if (pattern[index] !== text[startIndex + index]) {
      return false;
    }
  }

  return true;
};

const getHash = (text, startIndex, endIndex, base, module) => {
  let hash = 0;

  for (let i = endIndex - 1; i >= startIndex; i--) {
    hash = (hash * base + text.charCodeAt(i)) % module;
  }

  return hash;
};

const fastPower = (base, power, module) => {
  if (power === 1) {
    return base;
  }

  if (power % 2 === 1) {
    return ((base * fastPower(base, power - 1, module)) % module) % module;
  }

  const result = fastPower(base, Math.floor(power / 2), module);
  return (result * result) % module;
};

export const rabinKarp = (pattern, text) => {
  const base = 7;
  const module = 1_000_000_007;
  const hashMaxBasePower = fastPower(base, pattern.length - 1, module);

  const hashPattern = getHash(pattern, 0, pattern.length, base, module);
  let hashText = getHash(text, 0, pattern.length, base, module);

  if (hashPattern === hashText && checkSubString(pattern, text, 0)) {
    return true;
  }

  for (let i = 1; i <= text.length - pattern.length; i++) {
    const hashWithoutFirstChar = Math.floor(
      (hashText - text.charCodeAt(i - 1)) / base
    );
    const nextCharHash =
      (text.charCodeAt(i + pattern.length - 1) * hashMaxBasePower) % module;
    hashText = hashWithoutFirstChar + nextCharHash;

    if (hashPattern === hashText && checkSubString(pattern, text, i)) {
      console.log(i);
      return true;
    }
  }

  return false;
};
