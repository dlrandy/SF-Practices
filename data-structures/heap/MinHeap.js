import Heap from './Heap';

export default class MinHeap extends Heap {
    pairIsInCorrectOrder(firstElement, secondElement){
        return this.compare.lessThanOrEqual(firstElement, secondElement);
    }
};



// import Comparator from "../utils/comparator/Comparator";
// export class MinHeap {
//   constructor(comparatorFunction) {
//     this.heapContainer = [];
//     // this.heapElements = new WeakMap();
//     this.compare = new Comparator(comparatorFunction);
//   }

//   getLeftChildIndex(parentIndex) {
//     return 2 * parentIndex + 1;
//   }

//   getRightChildIndex(parentIndex) {
//     return 2 * parentIndex + 2;
//   }

//   getParentIndex(childIndex) {
//     return Math.floor((childIndex - 1) / 2);
//   }

//   hasParent(childIndex) {
//     return this.getParentIndex(childIndex) >= 0;
//   }
//   hasLeftChild(parentIndex) {
//     return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
//   }

//   hasRightChild(parentIndex) {
//     return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
//   }
//   leftChild(parentIndex) {
//     return this.heapContainer[this.getLeftChildIndex(parentIndex)];
//   }
//   rightChild(parentIndex) {
//     return this.heapContainer[this.getRightChildIndex(parentIndex)];
//   }

//   parent(childIndex) {
//     return this.heapContainer[this.getParentIndex(childIndex)];
//   }

//   swap(indexOne, indexTwo) {
//     const tmp = this.heapContainer[indexTwo];
//     this.heapContainer[indexTwo] = this.heapContainer[indexOne];
//     this.heapContainer[indexOne] = tmp;
//   }

//   empty() {
//     return !this.heapContainer.length;
//   }

//   findIndicies(item, comparator = this.compare) {
//     const foundItemIndicies = [];
//     for (
//       let itemIndex = 0;
//       itemIndex < this.heapContainer.length;
//       itemIndex++
//     ) {
//       if (comparator.equal(item, this.heapContainer[itemIndex])) {
//         foundItemIndicies.push(itemIndex);
//       }
//     }
//     return foundItemIndicies;
//   }

//   toString() {
//     return this.heapContainer.toString();
//   }

//   heapifyDown(startIndex = 0) {
//     let currentIndex = startIndex;
//     let nextIndex = null;

//     while (this.hasLeftChild(currentIndex)) {
//       if (
//         this.hasRightChild(currentIndex) &&
//         this.compare.lessThanOrEqual(
//           this.rightChild(currentIndex),
//           this.leftChild(currentIndex)
//         )
//       ) {
//         nextIndex = this.getRightChildIndex(currentIndex);
//       } else {
//         nextIndex = this.getLeftChildIndex(currentIndex);
//       }

//       if (
//         this.compare.lessThanOrEqual(
//           this.heapContainer[currentIndex],
//           this.heapContainer[nextIndex]
//         )
//       ) {
//         break;
//       }

//       this.swap(currentIndex, nextIndex);
//       currentIndex = nextIndex;


//     }
//   }

//   heapifyUp(startIndex) {
//     let currentIndex = startIndex || this.heapContainer.length - 1;

//     while (
//       this.hasParent(currentIndex) &&
//       this.compare.greaterThan(
//         this.parent(currentIndex),
//         this.heapContainer[currentIndex]
//       )
//     ) {
//       this.swap(currentIndex, this.getParentIndex(currentIndex));
//       currentIndex = this.getParentIndex(currentIndex);
//     }
//   }

//   peek(){
//       if(this.heapContainer.length === 0){
//         return null;
//       }
//       return this.heapContainer[0];
//   }
//   poll(){
//       if(this.heapContainer.length === 0){
//         return null;
//       }

//       if(this.heapContainer.length === 1){
//         return this.heapContainer.pop();
//       }

//       const item = this.heapContainer[0];
//       this.heapContainer[0] = this.heapContainer.pop();
//       this.heapifyDown();
//       return item;
//   }

//   add(item){
//     this.heapContainer.push(item);
//     this.heapifyUp();
//     return this;
//   }

//   remove(item, comparator = this.compare){

//     const numberOfItemsToRemove = this.findIndicies(item, comparator).length;
//     for (let index = 0; index < numberOfItemsToRemove; index++) {
//         const indexToRemove = this.findIndicies(item, comparator).pop();
        
//         if(indexToRemove === this.heapContainer.length - 1){
//             this.heapContainer.pop();
//         } else {
//             this.heapContainer[indexToRemove] = this.heapContainer.pop();
//             const parentItem = this.parent(indexToRemove);
//             if(this.hasLeftChild(indexToRemove) &&(!parentItem <= this.heapContainer[indexToRemove])){
//                 this.heapifyDown(indexToRemove);
//             } else {
//                 this.heapifyUp(indexToRemove);
//             }
//         }
//     }
//     return this;
// }

// }




































