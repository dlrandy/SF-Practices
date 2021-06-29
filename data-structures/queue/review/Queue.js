import LinkedList from "../../linked-list/LinkedList.js";
export default class Queue {
  constructor() {
    this.root = new LinkedList();
  }

  isEmpty() {
      return !this.root.head;
  }
  enQueue(value) {
    this.root.append(value);
  }
  deQueue() {
     return this.root.deleteHead()?.value;
  }
  peek() {
    return this.root.head?.value;  
  }
  toString(callback) {
    return this.root.toString(callback);
  }
}
