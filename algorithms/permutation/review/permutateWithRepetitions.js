export default function permutateWithRepetitions(
  permutationOptions,
  permutationLength = permutationOptions.length
) {
  if (permutationLength == 1) {
    return permutationOptions.map(permutationOption => [permutationOption]);
  }
  const permutations = []
  const smallerPermutations = permutateWithRepetitions(permutationOptions, permutationLength - 1);
  permutationOptions.forEach( currentPermutationOption => {
    smallerPermutations.forEach(smallerPermutation => {
      permutations.push([currentPermutationOption, ...smallerPermutation]);
    })
  });

  return permutations;

}
