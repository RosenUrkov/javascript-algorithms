export const dfs = (tree) => {
  console.log(tree.value);
  tree.children(dfs);
};
