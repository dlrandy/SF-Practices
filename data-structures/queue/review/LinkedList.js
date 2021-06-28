import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newLinkedListNode = new LinkedListNode(value, this.head);
    this.head = newLinkedListNode;

    if (this.tail === null) {
      this.tail = this.head;
    }

    return this;
  }
  append(value) {
    const newLinkedListNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newLinkedListNode;
      this.tail = newLinkedListNode;
      return this;
    }

    this.tail.next = newLinkedListNode;
    this.tail = newLinkedListNode;
    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    // 这里没做严谨，首先要先看headshi
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode;
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
    if (!this.head) {
      return null;
    }
    const theTail = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return theTail;
    }
    let currentNode = this.head;
    while (currentNode.next !== theTail) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    return theTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }
    const theHead = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return theHead;
    }
    this.head = this.head.next;
    theHead.next = null;
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
      if (value === currentNode.value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  fromArray(array) {
    array.forEach((value) => this.append(value));
    return this;
  }
  toArray() {
    const res = [];
    let currentNode = this.head;
    while (currentNode) {
      res.push(currentNode);
      currentNode = currentNode.next;
    }
    return res;
  }
  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .join("");
  }
  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = this.tail;
    this.tail = prevNode;
    return this;
  }
}
