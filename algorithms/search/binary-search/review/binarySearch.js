function binarySearch1(nums, target) {
    let startIndex = 0, endIndex = nums.length - 1;

    while (startIndex <= endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (nums[middleIndex] === target) {
            return middleIndex;
        }

        if (nums[middleIndex] < target) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return - 1;
}
function binarySearch2(nums, target) {
    let startIndex = 0, endIndex = nums.length;

    while (startIndex < endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (nums[middleIndex] === target) {
            return middleIndex;
        }

        if (nums[middleIndex] < target) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex;
        }
    }

    if (startIndex < nums.length && nums[startIndex] === target) {
        return startIndex;
    }

    return - 1;
}
function binarySearch3(nums, target) {
    let startIndex = 0, endIndex = nums.length;

    while (startIndex + 1 < endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (nums[middleIndex] === target) {
            return middleIndex;
        }

        if (nums[middleIndex] < target) {
            startIndex = middleIndex;
        } else {
            endIndex = middleIndex;
        }
    }

    if ( nums[startIndex] === target) {
        return startIndex;
    }
    if ( nums[endIndex] === target) {
        return endIndex;
    }

    return - 1;
}