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
    if (node.left === null && node.right === null) {
      replaceChild(node.parent, node, null);

      if (node === head) {
        return null;
      }

      return updateColorAndBalance(node.parent);
    }

    if (node.left === null) {
      replaceChild(node.parent, node, node.right);

      if (node === head) {
        return node.right;
      }

      return updateColorAndBalance(node.parent);
    }

    if (node.right === null) {
      replaceChild(node.parent, node, node.left);

      if (node === head) {
        return node.left;
      }

      return updateColorAndBalance(node.parent);
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
    return updateColorAndBalance(rightMostSmall);
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
      const rotationNode = node.parent;
      const father = node.parent.parent;
      const grandFather = node.parent.parent.parent;

      replaceChild(grandFather, father, rotationNode);

      father.right = rotationNode.left;
      if (rotationNode.left) {
        rotationNode.left.parent = father;
      }

      rotationNode.left = father;
      father.parent = rotationNode;

      rotationNode.color = 0;
      father.color = 1;

      if (father === head) {
        head = rotationNode;
      }

      return rotationNode;
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
      const rotationNode = node.parent;
      const father = node.parent.parent;
      const grandFather = node.parent.parent.parent;

      replaceChild(grandFather, father, rotationNode);

      father.left = rotationNode.right;
      if (rotationNode.right) {
        rotationNode.right.parent = father;
      }

      rotationNode.right = father;
      father.parent = rotationNode;

      rotationNode.color = 0;
      father.color = 1;

      if (father === head) {
        head = rotationNode;
      }

      return rotationNode;
    }

    return node;
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

const redBlackTree = createRedBlackTree();

redBlackTree.add(7);
redBlackTree.add(3);
redBlackTree.add(9);
redBlackTree.add(1);
redBlackTree.add(2);
redBlackTree.add(4);
redBlackTree.add(7);
redBlackTree.add(6);
redBlackTree.add(10);
redBlackTree.add(5);
redBlackTree.add(8);

console.log(redBlackTree.head);
