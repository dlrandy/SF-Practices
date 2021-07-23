export default function permutateWithRepetitions(
  permutationOptions,
  permutationLength = permutationOptions.length
) {
 const permutations  = [];
 if(permutationLength == 1){
   // 这里不是这么简单的
    // return [[permutationOptions[0]]];
    return permutationOptions.map(permutationOption =>[permutationOption])
  }

  const smallerPermutations = permutateWithRepetitions(permutationOptions, permutationLength - 1);
  for (let i = 0; i < permutationOptions.length; i++) {
    const permutationOption = permutationOptions[i];
    for (let j = 0; j < smallerPermutations.length; j++) {
      const smallerPermutation = smallerPermutations[j]
      permutations.push([permutationOption, ...smallerPermutation]);
    }
    
  }


 return permutations;

}
// export default function permutateWithRepetitions(
//   permutationOptions,
//   permutationLength = permutationOptions.length
// ) {
//   if (permutationLength == 1) {
//     return permutationOptions.map(permutationOption => [permutationOption]);
//   }
//   const permutations = []
//   const smallerPermutations = permutateWithRepetitions(permutationOptions, permutationLength - 1);
//   permutationOptions.forEach( currentPermutationOption => {
//     smallerPermutations.forEach(smallerPermutation => {
//       permutations.push([currentPermutationOption, ...smallerPermutation]);
//     })
//   });

//   return permutations;

// }
