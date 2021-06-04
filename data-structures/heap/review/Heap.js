import Comparator from "../../utils/comparator/Comparator";

export default class Heap {
  constructor(comparatorFunction) {
    if (new.target === Heap) {
      throw new Error("Heap 类不应该被实例化");
    }
    this.compare = new Comparator(comparatorFunction);
    this.heapContainer = [];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
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
    [this.heapContainer[indexOne], this.heapContainer[indexTwo]] = [
      this.heapContainer[indexTwo],
      this.heapContainer[indexOne],
    ];
  }

  peek() {
    return this.heapContainer[0];
  }

  poll() {
    if (this.heapContainer.length <= 1) {
      return this.heapContainer.pop();
    }

    const target = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return target;
  }
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }
  remove(item, comparator = this.compare) {
    // 可读性不好
    const numOfIndexOfItemToRemove = this.findIndicies(item, comparator).length;
    for (let i = 0; i < numOfIndexOfItemToRemove; i++) {
      const indexToRemove = this.findIndicies(item, comparator).pop();
      // 堆做删除操作的时候，如果是最后一个要移除，可以省略堆化操作的
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        const parentItem = this.parent(indexToRemove);
        this.heapContainer[indexToRemove] = this.heapContainer.pop();
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
    const indeicies = [];
    this.heapContainer.forEach((value, index) => {
      if (comparator.equal(item, value)) {
        indeicies.push(index);
      }
    });
    return indeicies;
  }
  isEmpty() {
    return this.heapContainer.length === 0;
  }
  toString() {
    return this.heapContainer.toString();
  }
  heapifyUp(startIndex) {
    let currentIndex = startIndex || this.heapContainer.length - 1;

    // 可读性
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
    let nextIndex;
    while (this.hasLeftChild(currentIndex)) {
      nextIndex = this.getLeftChildIndex(currentIndex);

      if (this.hasRightChild(currentIndex)) {
        const rightIndex = this.getRightChildIndex(currentIndex);
        if (
          this.pairIsInCorrectOrder(
            this.heapContainer[rightIndex],
            this.heapContainer[nextIndex]
          )
        ) {
          nextIndex = rightIndex;
        }
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
  // 注意比较的是元素不是索引
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(
      `Heap类中的pairIsInCorrectOrder方法不能直接使用，应该由子类自己实现！`
    );
  }
}
