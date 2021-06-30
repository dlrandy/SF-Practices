import LinkedList from "../../linked-list/LinkedList.js";
 
export default class Queue {
  constructor() {
    this.root = new LinkedList();
  }

  isEmpty() {
      return !this.root.head;
  }
  push(value) {
     return this.root.prepend(value);
  }
  pop() {
     return this.root.deleteHead()?.value;
  }
  peek() {
      return this.root.head?.value;
  }
  toString(callback) {
    return this.root.toString(callback);
  }
  toArray(){
    return this.root.toArray().map(({value})=>value);
  }
}
