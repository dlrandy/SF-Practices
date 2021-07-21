export function bwPowerSet(set) {
  const subSets = [];
  const numberOfCombinations = 2 ** set.length;
  // 一共有这么多个子集
  for (let i = 0; i < numberOfCombinations; i++) {
    // 每次从集合中取出一个二进制位

    const subSet = [];

    for (let j = 0; j < set.length; j++) {
      /*
           依次取出集合的第一个，第二个，第三个....
           根据二进制位来确定这个item是否需要放入到子集里
           */
      if (i & (1 << j)) {
        console.log(i, j);
        subSet.push(set[j]);
      }
    }
    subSets.push(subSet);
  }

  return subSets;
}

export function btPowerSetBT(
  originalSet,
  allSubsets = [[]],
  currentSubset = [],
  startAt = 0
) {
  for (let position = startAt; position < originalSet.length; position++) {
    currentSubset.push(originalSet[position]);
    allSubsets.push([...currentSubset]);
    btPowerSetBT(originalSet, allSubsets, currentSubset, position + 1);
    currentSubset.pop();
  }

  return allSubsets;
}
