import combinationWithRepetitions from "./combinationWithRepetitions.js";
import combinationWithoutRepetitions from "./combinationWithoutRepetitions.js";


/*
n!/(r! * (n - r)!)


*/
const teamSize = 3;
const candidates = ["Bill", "John", "Kate", "Jane", "Mike"];
const possibleTeams = combinationWithoutRepetitions(candidates, teamSize);

console.log(possibleTeams);

/*
(n + r - 1)! / (r!*(n - 1)!)

*/
const iceCreamFlavours = ["banana", "mint", "pistachio", "vanilla"];
const numberOfScoops = 3;
const scoopCombinations = combinationWithRepetitions(
  iceCreamFlavours,
  numberOfScoops
);
console.log(scoopCombinations);
