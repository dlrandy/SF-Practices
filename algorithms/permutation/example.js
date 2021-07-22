import permutateWithRepetitions from "./permutateWithRepetitions.js";
import permutateWithoutRepetitions from "./permutateWithoutRepetitions.js";

const pwdSymbols = ["A", "B", "C"];
const pwdLen = 3;
const allPossiblePwds = permutateWithRepetitions(pwdSymbols, pwdLen);

console.log(allPossiblePwds);

const racers = ["John", "Bill", "Jane"];
const racingRes = permutateWithoutRepetitions(racers);
console.log(racingRes);
