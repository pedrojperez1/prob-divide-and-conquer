function countZeroes(array) {
    // return length minus index of occurance of first zero
    let firstZeroIdx = findFirstZero(array);
    return firstZeroIdx === -1 ? 0 : array.length - firstZeroIdx
}

function findFirstZero(array) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((rightIdx + leftIdx) / 2);
        if (array[midIdx] === 0 && (array[midIdx - 1] === 1 || array[midIdx - 1] === undefined)) {
            return midIdx;
        } else {
            if (array[midIdx] === 1) {
                leftIdx = midIdx + 1;
            } else {
                rightIdx = midIdx - 1;
            }
        }
    }
    return -1;
}

module.exports = countZeroes