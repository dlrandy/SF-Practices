import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (this.tail == null) {
      this.tail = newNode;
    }
    return this;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.head = this.head || newNode;
    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode != null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  deleteTail() {
    let theTail = this.tail;
    if (!this.head) {
      return theTail;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return theTail;
    }
    let currentNode = this.head;
    while (currentNode.next && currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.tail.next = null;
    return theTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }
    let theHead = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return theHead;
    }

    this.head = this.head.next;
    return theHead;
  }

  find({ value, callback }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  fromArray(array){
    array.forEach(it => this.append(it));
    return this;
  }
  toArray(){
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return array;
  }
  toString(callback){
    return this.toArray().map(node => node.toString(callback)).toString();
  }
  reverse(){
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

}
