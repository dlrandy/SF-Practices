import Comparator from '../../utils/comparator/Comparator.js'
/*
快排是一种分治算法，意味着将最初问题拆分成更小的子问题
尝试着解决这些子问题。然后合并成这些子问题的方案成为一个最终的方案


*/


export default function quickSort(originalArray, comparatorCallback = null){
    const comparator = new Comparator(comparatorCallback)
    const array = [...originalArray];
    if (array.length <= 1) {
        return array;
    } 
    const leftArray = [];
    const rightArray = [];
    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    while (array.length) {
        const currentElement = array.shift();

        if (comparator.equal(currentElement, pivotElement)) {
            centerArray.push(currentElement);
        } else if (comparator.lessThan(currentElement, pivotElement)) {
            leftArray.push(currentElement)
        } else {
            rightArray.push(currentElement);
        }
    }

    const leftArraySorted = quickSort(leftArray, comparatorCallback);
    const righttArraySorted = quickSort(rightArray, comparatorCallback);
    return [...leftArraySorted, ...centerArray,...righttArraySorted]
}
