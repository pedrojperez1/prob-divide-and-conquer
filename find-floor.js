function findFloor(array, target) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (array[midIdx] < target && (array[midIdx + 1] >= target || array[midIdx + 1] === undefined)) {
            return array[midIdx];
        } else {
            if (array[midIdx] >= target) {
                rightIdx = midIdx;
            } else if (array[midIdx] < target && (array[midIdx + 1] < target || array[midIdx + 1] === undefined)) {
                leftIdx = midIdx + 1;
            }
        }
    }
    return -1;
}

module.exports = findFloor