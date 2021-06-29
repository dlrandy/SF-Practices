import Queue from './Queue.js';

const messageQueue = new Queue();
console.log(messageQueue.isEmpty());
console.log(messageQueue.toString());

messageQueue.enQueue('message_1')
console.log(messageQueue.isEmpty());
console.log(messageQueue.toString());
console.log(messageQueue.peek());

messageQueue.enQueue('message_2')
console.log(messageQueue.isEmpty());
console.log(messageQueue.toString());
console.log(messageQueue.peek());


console.log(messageQueue.deQueue());
console.log(messageQueue.deQueue());
console.log(messageQueue.isEmpty());


