function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let largeVal = array[j];
                let smallVal = array[j + 1];
                array.splice(j + 1, 1, largeVal);
                array.splice(j, 1, smallVal);
            }
        }
    }
    return array;
}

module.exports = bubbleSort;