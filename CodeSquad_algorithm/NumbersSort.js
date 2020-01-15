// N개의 숫자들이 담긴 배열을(정렬되있지 않음) 오름차순으로 정렬하는 코드 구현하기
// 예시 = [9, 6, 3, 4, 1, 3, 6, 7, 2, 5] => [1, 2, 3, 3, 4, 5, 6, 6, 7, 9]
// 1.버블정렬 2.삽입정렬 3.선택정렬 *4.퀵정렬* 5.머지정령 6.힙정렬

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

console.log(bubbleSort([9, 6, 3, 4, 1, 3, 6, 7, 2, 5]));
