import Stack from './Stack.js';
const stack = new Stack();

const arrayToReverse = ['a','b','c'];
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.toArray());

 stack.push(arrayToReverse[0]) 
console.log(stack.isEmpty());
console.log(stack.toString());
console.log(stack.toArray());

 stack.push(arrayToReverse[1]) 
 stack.push(arrayToReverse[2]) 
console.log(stack.toString());
console.log(stack.toArray());

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
