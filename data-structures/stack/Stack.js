import LinkedList from "../linked-list/LinkedList.js";

/**
 * 这里为什么使用head而不是tail？
 * 在于后面toArray和toString的时候不用再进行翻转了
 */
export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
      return !this.linkedList.head;
  }
  push(value) {
    this.linkedList.prepend(value);
  }
  pop() {
    const removeHead = this.linkedList.deleteHead();
    return removeHead?.value;
  }
  peek() {
      return this.linkedList?.head?.value;
  }
  toString(callback) {
    return this.linkedList.toString(callback);
  }
  toArray(){
    return this.linkedList.toArray().map((linkedListNode) => linkedListNode.value);
  }
}
