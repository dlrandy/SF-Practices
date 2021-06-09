import Comparator from "../../utils/comparator/Comparator";

export default class Heap {
  constructor(comparatorFunction) {
    if (new.target === Heap) {
      throw new TypeError("不能直接构造Heap实例.");
    }

    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) >= 0;
  }
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) >= 0;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = this.heapContainer[indexTwo];
    this.heapContainer[indexRwo] = tmp;
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }
  remove(item, comparator = this.compare) {
    const numberOfIndiciesOfItemToRemove = this.findIndicies(
      item,
      comparator
    ).length;
    for (let index = 0; index < numberOfIndiciesOfItemToRemove; index++) {
      const indexToRemove = this.findIndicies(item, comparator).pop();
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop();
        const parentItem = this.parent(indexToRemove);
        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem ||
            this.pairIsInCorrectOrder(
              parentItem,
              this.heapContainer[indexToRemove]
            ))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  }

  findIndicies(item, comparator = this.compare) {
    const foundItemIndicies = [];
    for (let index = 0; index < this.heapContainer.length; index++) {
      if (comparator.equal(item, this.heapContainer[index])) {
        foundItemIndicies.push(index);
      }
    }
    return foundItemIndicies;
  }
  isEmpty() {
    return this.heapContainer.length === 0;
  }
  toString() {
    return this.heapContainer.toString();
  }
  heapifyUp(startIndex) {
    let currentIndex = startIndex || this.heapContainer.length - 1;
    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(
        this.parent(currentIndex),
        this.heapContainer[currentIndex]
      )
    ) {
      const parentIndex = this.getParentIndex(currentIndex);
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
  heapifyDown(startIndex = 0) {
    let currentIndex = startIndex;
    let nextIndex = null;
    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairIsInCorrectOrder(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (
        this.pairIsInCorrectOrder(
          this.heapContainer[currentIndex],
          this.heapContainer[nextIndex]
        )
      ) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(
      `需要实现heap对${firstElement}和${secondElement}的值比较方法`
    );
  }
}
