export default function permutateWithoutRepetitions(permutationOptions) {
    if (permutationOptions.length == 1) {
        return [permutationOptions];
    }

    const permutations = [];
    const smallerPermutations= permutateWithoutRepetitions(permutationOptions.slice(1));
    const firstOption = permutationOptions[0];
    for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex++) {
        const smallerPermutation = smallerPermutations[permIndex];
        for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex++) {
            const permutationPrefix = smallerPermutation.slice(0, positionIndex);
            const permutationSuffix = smallerPermutation.slice(positionIndex);
            permutations.push([...permutationPrefix, firstOption, ...permutationSuffix]);
            
        }
        
    }

    return permutations
};
