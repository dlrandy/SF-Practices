export default function permutateWithoutRepetitions(permutationOptions) {
  // 当集合里只有一个数的时候
  if (permutationOptions.length == 1) {
    return permutationOptions.map((permutationOption) => [permutationOption]);
  }
  //当前集合的最终所有排列
  const permutations = [];
  // 取出当前集合里的第一个数
  const firstOption = permutationOptions[0];
  // 对没有第一个数的集合进行排列
  const smallerPermutations = permutateWithoutRepetitions(
    permutationOptions.slice(1)
  );
  // 遍历拿到的所有子排列
  for (let i = 0; i < smallerPermutations.length; i++) {
    // 取出一个子排列
    const smallerPermutation = smallerPermutations[i];
    // 遍历特定的子排列，这个循环实际上做的是将之前的第一个选项
    // 插入到子排列的不同位置上 (注意这里位置的取值)
    for (let j = 0; j <= smallerPermutation.length; j++) {
      const prefix = smallerPermutation.slice(0, j);
      const suffix = smallerPermutation.slice(j);
      permutations.push([...prefix, firstOption, ...suffix]);
    }
  }

  return permutations;
}
