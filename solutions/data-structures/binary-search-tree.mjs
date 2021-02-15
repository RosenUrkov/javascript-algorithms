const createTreeNode = (value, left = null, right = null, parent = null) => {
  return {
    value,
    left,
    right,
    parent,
  };
};

export const createBinarySearchTree = (
  compareFn = (x, y) => x.value - y.value
) => {
  let head = null;

  const add = (element) => {
    const newNode = createTreeNode(element);

    if (head === null) {
      head = newNode;
      return head;
    }

    return insertNode(head, newNode);
  };

  const remove = (element) => {
    if (head === null) {
      return null;
    }

    const newNode = createTreeNode(element);
    const node = findNode(head, newNode);

    if (node === null) {
      return null;
    }

    if (node.left === null && node.right === null) {
      replaceChild(node.parent, node, null);

      if (node === head) {
        head = null;
      }
    } else if (node.left === null) {
      replaceChild(node.parent, node, node.right);

      if (node === head) {
        head = node.right;
      }
    } else if (node.right === null) {
      replaceChild(node.parent, node, node.left);

      if (node === head) {
        head = node.left;
      }
    } else {
      const replacement = node.right;
      const rightMostOfTheSmall = getRightMostNode(node.left);

      rightMostOfTheSmall.right = replacement.left;
      if (replacement.left) {
        replacement.left.parent = rightMostOfTheSmall;
      }

      replacement.left = node.left;
      node.left.parent = replacement;

      replaceChild(node.parent, node, replacement);

      if (node === head) {
        head = replacement;
      }
    }

    node.right = null;
    node.left = null;
    node.parent = null;

    return node;
  };

  const contains = (element) => {
    if (head === null) {
      return false;
    }

    const searchNode = createTreeNode(element);
    return !!findNode(head, searchNode);
  };

  const toArray = () => {
    if (head === null) {
      return [];
    }

    return inOrderTraversal(head);
  };

  const insertNode = (tree, newNode) => {
    const comparison = compareFn(newNode, tree);

    if (comparison < 0) {
      if (!tree.left) {
        tree.left = newNode;
        newNode.parent = tree;
        return newNode;
      }

      return insertNode(tree.left, newNode);
    }
    if (comparison > 0) {
      if (!tree.right) {
        tree.right = newNode;
        newNode.parent = tree;
        return newNode;
      }

      return insertNode(tree.right, newNode);
    }

    newNode.left = tree.left;
    if (tree.left) {
      tree.left.parent = newNode;
    }

    tree.left = newNode;
    newNode.parent = tree;

    return newNode;
  };

  const replaceChild = (parent, oldChild, newChild) => {
    if (parent?.left === oldChild) {
      parent.left = newChild;
    } else if (parent?.right === oldChild) {
      parent.right = newChild;
    }

    if (newChild?.parent) {
      newChild.parent = parent;
    }

    return newChild;
  };

  const findNode = (tree, searchedNode) => {
    const comparison = compareFn(searchedNode, tree);

    if (comparison === 0) {
      return tree;
    }
    if (comparison < 0 && tree.left) {
      return findNode(tree.left, searchedNode);
    }
    if (comparison > 0 && tree.right) {
      return findNode(tree.right, searchedNode);
    }

    return null;
  };

  const getLeftMostNode = (tree = head) => {
    if (tree.left === null) {
      return tree;
    }

    return getLeftMostNode(tree.left);
  };

  const getRightMostNode = (tree = head) => {
    if (tree.right === null) {
      return tree;
    }

    return getRightMostNode(tree.right);
  };

  const inOrderTraversal = (tree) => {
    const nodes = [];

    if (tree.left) {
      nodes.push(...inOrderTraversal(tree.left));
    }

    nodes.push(tree.value);

    if (tree.right) {
      nodes.push(...inOrderTraversal(tree.right));
    }

    return nodes;
  };

  return {
    get head() {
      return head;
    },
    add,
    remove,
    contains,
    getLeftMostNode,
    getRightMostNode,
    toArray,
  };
};
