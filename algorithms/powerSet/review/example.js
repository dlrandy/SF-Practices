import {bwPowerSet,btPowerSetBT} from './powerSet.js';

const ingredients = ['banana', 'orange', 'apple'];
const saladMixes =  bwPowerSet(ingredients);

console.log(saladMixes);
const saladMikes =  btPowerSetBT(ingredients);

console.log(saladMikes);


