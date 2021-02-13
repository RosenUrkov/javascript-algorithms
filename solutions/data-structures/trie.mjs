const createTrieNode = (letter, isCompleteWord) => {
  return {
    letter,
    isCompleteWord,
    childNodes: {},
  };
};

export const createTrie = () => {
  const root = createTrieNode("", false);

  const parseText = function (text) {
    text.split(" ").forEach((word) => {
      const node = root.childNodes[word[0]]
        ? root.childNodes[word[0]]
        : createTrieNode(word[0], false);

      root.childNodes[word[0]] = node;
      return parseWord(node, word);
    });

    return this;
  };

  const parseWord = (currentNode, word) => {
    const [letter, ...rest] = word;

    if (rest.length === 0) {
      if (currentNode) {
        currentNode.isCompleteWord = true;
        return currentNode;
      }

      return createTrieNode(letter, true);
    }

    const node = currentNode ? currentNode : createTrieNode(letter, false);
    const childNode = parseWord(node.childNodes[rest[0]], rest);
    node.childNodes[rest[0]] = childNode;

    return node;
  };

  const findLastNode = (parent, word) => {
    const [letter, ...rest] = word;

    if (rest.length === 0) {
      return parent.childNodes[letter];
    }

    return parent.childNodes[letter]
      ? findLastNode(parent.childNodes[letter], rest)
      : null;
  };

  const has = (word) => {
    return !!findLastNode(root, word)?.isCompleteWord;
  };

  const getWords = (prefix) => {
    const strPrefix = !prefix ? "" : prefix.slice(0, prefix.length - 1);
    const prefixLastNode = !prefix ? root : findLastNode(root, prefix);

    const getWordsRecursive = (node) => {
      const childSubWords = Object.values(node.childNodes).flatMap((child) => {
        return getWordsRecursive(child).map((subWord) => node.letter + subWord);
      });

      return node.isCompleteWord
        ? [node.letter, ...childSubWords]
        : childSubWords;
    };

    return getWordsRecursive(prefixLastNode).map(
      (subWord) => strPrefix + subWord
    );
  };

  return {
    parseText,
    has,
    getWords,
  };
};
