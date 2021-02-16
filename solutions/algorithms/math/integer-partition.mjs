export const integerPartition = (number) => {
  const partitions = [];

  const integerPartitionRecursive = (currNumber, currPartition, target) => {
    if (target === 0) {
      partitions.push(currPartition);
      return;
    }
    if (currNumber > target) {
      return;
    }

    for (let i = currNumber; i <= target; i++) {
      integerPartitionRecursive(i, [...currPartition, i], target - i);
    }
  };

  integerPartitionRecursive(1, [], number);

  return partitions;
};
