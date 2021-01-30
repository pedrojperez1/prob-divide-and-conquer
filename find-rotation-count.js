function findRotationCount(array) {
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

module.exports = findRotationCount