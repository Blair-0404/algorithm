// N개의 숫자들이 담긴 배열을(정렬되있지 않음) 오름차순으로 정렬하는 코드 구현하기
// 예시 = [9, 6, 3, 4, 1, 3, 6, 7, 2, 5] => [1, 2, 3, 3, 4, 5, 6, 6, 7, 9]
// 1.버블정렬 2.삽입정렬 3.선택정렬 *4.퀵정렬* 5.머지정령 6.힙정렬


// 1.버블정렬
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

// 2. 인덱스가 모두 0으로 들어있는 배열을 만들고 각 인덱스에 number counting을 해준 뒤 count수만큼 인덱스 숫자로 변환하기
function makeNumberSort(inputArray) { //인자 = [3, 5, 4, 0, 6, 1, 7, 8, 5, 10]
    let zeroArray = [];
    let resultArray = [];
    const maxNumber = 10;

    for (let i = 0; i < maxNumber + 1; i++) { // array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        zeroArray.push(0);
    }

    for (let j = 0; j < inputArray.length; j++) { // array = [1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 1]
        zeroArray[inputArray[j]] += 1;
    }

    for (let k = 0; k < zeroArray.length; k++) { // resultArray = [0, 1, 3, 4, 5, 5, 6, 7, 8, 10]
        for (v = zeroArray[k]; v > 0; v--) {
            resultArray.push(k); // **
        }
    }

    return resultArray;
}

console.log(bubbleSort([9, 6, 3, 4, 1, 3, 6, 7, 2, 5]));
console.log(makeNumberSort([9, 6, 3, 4, 1, 3, 6, 7, 2, 5]));