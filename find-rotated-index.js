function findRotatedIndex(array, target) {
    // find the idx of the number that is smaller than the number before
    // do binary search, but shifted by the start idx
    const startIdx = findStartIdx(array);
    return shiftedBinarySearch(array, target, startIdx);
}

function findStartIdx(array) { // O(log n) complexity
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (array[midIdx] < array[midIdx - 1] || (array[midIdx - 1] === undefined && array[midIdx] < array[array.length - 1])) {
            return midIdx;
        } else {
            if (array[leftIdx] > array[midIdx]) {
                rightIdx = midIdx - 1;
            } else {
                leftIdx = midIdx + 1;
            }
        }
    }
    return 0;
}

function shiftedBinarySearch(array, target, offset) { // O(log n) complexity
    let leftIdx = offset;
    let rightIdx = offset - 1;
    let unshiftLeft = leftIdx - offset;
    let unshiftRight = rightIdx + array.length - offset;
    let midIdx;
    while (unshiftLeft <= unshiftRight) {
        console.log("unshiftLeft:", unshiftLeft, "unshiftRight:", unshiftRight, "midIdx:", midIdx)
        if (Math.floor(((unshiftLeft + unshiftRight) / 2) + offset) > array.length - 1) {
            midIdx = Math.floor(((unshiftLeft + unshiftRight) / 2) + offset - array.length);
        } else {
            midIdx = Math.floor(((unshiftLeft + unshiftRight) / 2) + offset);
        }

        if (array[midIdx] === target) {
            return midIdx;
        } else if (array[midIdx] > target){
            unshiftRight = midIdx - offset;
        } else {
            unshiftLeft = midIdx - offset < 0 ? array.length - (offset - midIdx) + 1: midIdx - offset + 1;
        }
    }
    return -1;
}


module.exports = findRotatedIndex