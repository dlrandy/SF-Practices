import LinkedList from "../linked-list/LinkedList.js";
export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
      return !this.linkedList.head;
  }
  enQueue(value) {
    this.linkedList.append(value);
  }
  deQueue() {
    const removeHead = this.linkedList.deleteHead();
    return removeHead?.value;
  }
  peek() {
      return this.linkedList?.head?.value;
  }
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
