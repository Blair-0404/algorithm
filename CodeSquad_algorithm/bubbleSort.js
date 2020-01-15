function bubbleSort(array) {
    for (let i = array.length; i > 2; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array
}

// bubbleSort([6, 9, 2, 1, 5]);
// bubbleSort([10, 2, 6, 11, 9, 16, 1, 3]);
console.log(bubbleSort([10, 2, 6, 2,  11, 9, 16, 1, 3, 2]));


