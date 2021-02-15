const createTreeNode = (
  value,
  left = null,
  right = null,
  parent = null,
  color = 1
) => {
  return {
    value,
    left,
    right,
    parent,
    color, // 0 = black, 1 = red
  };
};

export const createRedBlackTree = (compareFn = (x, y) => x.value - y.value) => {
  let head = null;

  const add = (element) => {
    const newNode = createTreeNode(element);

    if (head === null) {
      newNode.color = 0;
      head = newNode;
      return head;
    }

    const lastChanged = insertNode(head, newNode);
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

    const lastChanged = removeNode(node);
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
        return updateColorAndBalance(newNode);
      }

      return insertNode(tree.left, newNode);
    }
    if (comparison > 0) {
      if (!tree.right) {
        tree.right = newNode;
        newNode.parent = tree;
        return updateColorAndBalance(newNode);
      }

      return insertNode(tree.right, newNode);
    }

    newNode.left = tree.left;
    if (tree.left) {
      tree.left.parent = newNode;
    }

    tree.left = newNode;
    newNode.parent = tree;

    const updateNode = newNode.left?.color === 1 ? newNode.left : newNode;
    return updateColorAndBalance(updateNode);
  };

  const removeNode = (node) => {
    // two children case
    if (node.left !== null && node.right !== null) {
      const rightMostSmall = getRightMostNode(node.left);
      node.value = rightMostSmall.value;

      return removeNode(rightMostSmall);
    }

    const child = node.left || node.right;

    // red node case
    if (node.color === 1) {
      replaceChild(node.parent, node, child);
      return node;
    }

    // black node case

    // red child case
    if (child && child.color === 1) {
      child.color = 0;
      replaceChild(node.parent, node, child);

      if (node === head) {
        head = child;
      }

      return node;
    }

    // black or no child case
    resolveDoubleBlackNode(node);

    replaceChild(node.parent, node, child);
    if (node === head) {
      head = child;
    }

    return node;
  };

  const resolveDoubleBlackNode = (node) => {
    // case 1
    if (node === head) {
      return node;
    }

    const rightSibling = node.parent.left === node && node.parent.right;
    const leftSibling = node.parent.right === node && node.parent.left;
    const sibling = leftSibling || rightSibling;

    // case 2
    if (
      node.parent.color === 0 &&
      sibling.color === 1 &&
      (!sibling.left || sibling.left.color === 0) &&
      (!sibling.right || sibling.right.color === 0)
    ) {
      if (rightSibling) {
        sibling.parent.color = 1;
        sibling.color = 0;
        leftLeftRotation(sibling, sibling.parent);

        return resolveDoubleBlackNode(node);
      }

      if (leftSibling) {
        sibling.parent.color = 1;
        sibling.color = 0;
        rightRightRotation(sibling, sibling.parent);

        return resolveDoubleBlackNode(node);
      }
    }

    // case 3
    if (
      node.parent.color === 0 &&
      sibling.color === 0 &&
      (!sibling.left || sibling.left.color === 0) &&
      (!sibling.right || sibling.right.color === 0)
    ) {
      sibling.color = 1;
      return resolveDoubleBlackNode(node.parent);
    }

    // case 4
    if (
      node.parent.color === 1 &&
      sibling.color === 0 &&
      (!sibling.left || sibling.left.color === 0) &&
      (!sibling.right || sibling.right.color === 0)
    ) {
      sibling.parent.color = 0;
      sibling.color = 1;

      return node;
    }

    // case 5
    if (node.parent.color === 0 && sibling.color === 0) {
      if (
        rightSibling &&
        ((sibling.left && sibling.left.color === 1) ||
          (!sibling.right && sibling.right.color === 0))
      ) {
        sibling.color = 1;
        sibling.left.color = 0;
        rightRightRotation(sibling.left, sibling);

        return resolveDoubleBlackNode(node);
      }

      if (
        leftSibling &&
        ((!sibling.left && sibling.left.color === 0) ||
          (sibling.right && sibling.right.color === 1))
      ) {
        sibling.color = 1;
        sibling.right.color = 0;
        leftLeftRotation(sibling.right, sibling);

        return resolveDoubleBlackNode(node);
      }
    }

    // case 6
    if (sibling.color === 0 && sibling.right && sibling.right.color === 1) {
      if (rightSibling && sibling.right && sibling.right.color === 1) {
        sibling.color = node.parent.color;
        sibling.parent.color = 0;
        sibling.right.color = 0;

        leftLeftRotation(sibling, sibling.parent);
        return node;
      }
      if (leftSibling && sibling.left && sibling.left.color === 1) {
        sibling.color = node.parent.color;
        sibling.parent.color = 0;
        sibling.left.color = 0;

        rightRightRotation(sibling, sibling.parent);
        return node;
      }
    }
  };

  const updateColorAndBalance = (node) => {
    // rule 1
    if (node.parent.color === 0) {
      return node;
    }

    const uncle =
      node.parent.parent.left === node.parent
        ? node.parent.parent.right
        : node.parent.parent.left;

    // rule 2
    if (uncle?.color === 1) {
      node.parent.color = 0;
      uncle.color = 0;

      if (node.parent.parent === head) {
        return node;
      }

      node.parent.parent.color = 1;
      return updateColorAndBalance(node.parent.parent);
    }

    // rule 3
    if (node.parent.parent.right === node.parent) {
      if (node.parent.left === node) {
        // right inner rotation
        const rotationNode = node.parent;

        replaceChild(rotationNode.parent, rotationNode, node);

        rotationNode.parent = node;
        rotationNode.left = node.right;
        node.right = rotationNode;

        return updateColorAndBalance(rotationNode);
      }

      // left outer rotation
      node.parent.color = 0;
      node.parent.parent.color = 1;

      return leftLeftRotation(node.parent, node.parent.parent);
    }

    if (node.parent.parent.left === node.parent) {
      if (node.parent.right === node) {
        // left inner rotation
        const rotationNode = node.parent;

        replaceChild(rotationNode.parent, rotationNode, node);

        rotationNode.parent = node;
        rotationNode.right = node.left;
        node.left = rotationNode;

        return updateColorAndBalance(rotationNode);
      }

      // right outer rotation
      node.parent.color = 0;
      node.parent.parent.color = 1;

      return rightRightRotation(node.parent, node.parent.parent);
    }

    return node;
  };

  const leftLeftRotation = (middleNode, upperNode) => {
    const rotationNode = middleNode;
    const father = upperNode;
    const grandFather = upperNode.parent;

    replaceChild(grandFather, father, rotationNode);

    father.right = rotationNode.left;
    if (rotationNode.left) {
      rotationNode.left.parent = father;
    }

    rotationNode.left = father;
    father.parent = rotationNode;

    if (father === head) {
      head = rotationNode;
    }

    return rotationNode;
  };

  const rightRightRotation = (middleNode, upperNode) => {
    const rotationNode = middleNode;
    const father = upperNode;
    const grandFather = upperNode.parent;

    replaceChild(grandFather, father, rotationNode);

    father.left = rotationNode.right;
    if (rotationNode.right) {
      rotationNode.right.parent = father;
    }

    rotationNode.right = father;
    father.parent = rotationNode;

    if (father === head) {
      head = rotationNode;
    }

    return rotationNode;
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
