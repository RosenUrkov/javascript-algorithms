const createTreeNode = (
  value,
  left = null,
  right = null,
  parent = null,
  leftHeight = 0,
  rightHeight = 0
) => {
  return {
    value,
    left,
    right,
    parent,
    leftHeight,
    rightHeight,
  };
};

export const createAVLTree = (compareFn = (x, y) => x.value - y.value) => {
  let head = null;

  const add = (element) => {
    const newNode = createTreeNode(element);

    if (head === null) {
      head = newNode;
      return head;
    }

    head = insertNode(head, newNode);
    return newNode;
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

    head = removeNode(node);
    return newNode;
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
        return updateHeightAndBalance(newNode);
      }

      return insertNode(tree.left, newNode);
    }
    if (comparison > 0) {
      if (!tree.right) {
        tree.right = newNode;
        newNode.parent = tree;
        return updateHeightAndBalance(newNode);
      }

      return insertNode(tree.right, newNode);
    }

    newNode.left = tree.left;
    tree.left = newNode;
    newNode.parent = tree;
    return updateHeightAndBalance(newNode);
  };

  const removeNode = (node) => {
    if (node.left === null && node.right === null) {
      replaceChild(node.parent, node, null);

      if (node === head) {
        return null;
      }

      return updateHeightAndBalance(node.parent);
    }

    if (node.left === null) {
      replaceChild(node.parent, node, node.right);

      if (node === head) {
        return node.right;
      }

      return updateHeightAndBalance(node.parent);
    }

    if (node.right === null) {
      replaceChild(node.parent, node, node.left);

      if (node === head) {
        return node.left;
      }

      return updateHeightAndBalance(node.parent);
    }

    const replacement = node.right;
    const rightMostSmall = getRightMostNode(node.left);

    rightMostSmall.right = replacement.left;
    if (replacement.left) {
      replacement.left.parent = rightMostSmall;
    }

    replacement.left = node.left;
    node.left.parent = replacement;

    replaceChild(node.parent, node, replacement);
    return updateHeightAndBalance(rightMostSmall);
  };

  const updateHeightAndBalance = (node) => {
    node.leftHeight = node.left
      ? Math.max(node.left.leftHeight, node.left.rightHeight) + 1
      : 0;

    node.rightHeight = node.right
      ? Math.max(node.right.leftHeight, node.right.rightHeight) + 1
      : 0;

    if (getNodeRotationIndex(node) < -1) {
      if (getNodeRotationIndex(node.right) >= 1) {
        // right inner rotation
        const rotationNode = node.right;
        const swapNode = rotationNode.left;

        replaceChild(node, rotationNode, swapNode);

        rotationNode.parent = swapNode;
        rotationNode.left = swapNode.right;
        swapNode.right = rotationNode;

        return updateHeightAndBalance(rotationNode);
      }

      // left outer rotation
      const rotationNode = node.right;

      replaceChild(node.parent, node, rotationNode);

      node.right = rotationNode.left;
      if (rotationNode.left) {
        rotationNode.left.parent = node;
      }

      rotationNode.left = node;
      node.parent = rotationNode;

      return updateHeightAndBalance(node);
    }

    if (getNodeRotationIndex(node) > 1) {
      if (getNodeRotationIndex(node.left) <= -1) {
        // left inner rotation
        const rotationNode = node.left;
        const swapNode = rotationNode.right;

        replaceChild(node, rotationNode, swapNode);

        rotationNode.parent = swapNode;
        rotationNode.right = swapNode.left;
        swapNode.left = rotationNode;

        return updateHeightAndBalance(rotationNode);
      }

      // right outer rotation
      const rotationNode = node.left;

      replaceChild(node.parent, node, rotationNode);

      node.left = rotationNode.right;
      if (rotationNode.right) {
        rotationNode.right.parent = node;
      }

      rotationNode.right = node;
      node.parent = rotationNode;

      return updateHeightAndBalance(node);
    }

    return node.parent ? updateHeightAndBalance(node.parent) : node;
  };

  const getNodeRotationIndex = (node) => node.leftHeight - node.rightHeight;

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
