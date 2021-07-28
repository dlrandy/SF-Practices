import Comparator from "../../../utils/comparator/Comparator.js";

export default function quickSort(originalArray, comparatorCallback = null) {
  const array = [...originalArray];
  if(array.length <= 1){
    return array;
  }
  const comparator = new Comparator(comparatorCallback);

  let pivot = array.shift();
  let center = [pivot];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (comparator.equal(item, pivot)) {
        center.push(item);
    } else if (comparator.lessThan(item, pivot)) {
        leftArray.push(item)
    } else {
        rightArray.push(item)
    }
  }

  let leftSortedArray = quickSort(leftArray, comparatorCallback);
  let rightSortedArray = quickSort(rightArray, comparatorCallback);
  return [...leftSortedArray, ...center, ...rightSortedArray];
}
