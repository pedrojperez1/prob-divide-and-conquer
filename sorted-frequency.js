function sortedFrequency(array, target) {
    const firstIdx = findFirst(array, target);
    if (firstIdx === -1) return -1;
    const secondIdx = findLast(array, target);
    return secondIdx - firstIdx + 1;
}

function findFirst(array, target) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    while (leftIdx <= rightIdx) {        
        let midIdx = Math.floor((rightIdx + leftIdx) / 2);
        if (array[midIdx] === target && (array[midIdx - 1] < target || array[midIdx - 1] === undefined)) {
            return midIdx;
        } else {
            if (array[midIdx] < target) {
                leftIdx = midIdx + 1;
            } else {
                rightIdx = midIdx;
            }
        }
    }
    return -1;
}

function findLast(array, target) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((rightIdx + leftIdx) / 2);
        if (array[midIdx] === target && (array[midIdx + 1] > target) || array[midIdx + 1] === undefined) {
            return midIdx;
        } else {
            if (array[midIdx] <= target) {
                leftIdx = midIdx + 1;
            } else {
                rightIdx = midIdx;
            }
        }
    }
    return -1;
}

module.exports = sortedFrequency