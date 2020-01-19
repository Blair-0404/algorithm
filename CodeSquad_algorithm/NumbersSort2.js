// N개의 숫자들이 담긴 배열을(정렬되있지 않음) 오름차순으로 정렬하는 코드 구현하기
// 예시 = [9, 6, 3, 4, 1, 3, 6, 7, 2, 5] => [1, 2, 3, 3, 4, 5, 6, 6, 7, 9]
// 1.버블정렬 2.삽입정렬 3.선택정렬 *4.퀵정렬* 5.머지정령 6.힙정렬

// 정렬구현으로 풀지않고 다른 방법으로 풀어보려 한다.
// 인덱스가 모두 0으로 들어있는 배열을 만들고 각 인덱스에 numbercounting을 해준 뒤 count수만큼 인덱스숫자로 변환하기
//

function numberSort(inputArray) { //인자 = [3, 5, 4, 0, 6, 1, 7, 8, 5, 10]
    let array = [];
    let resultArray = [];
    const maxNumber = 10;

    for (i = 0; i < maxNumber + 1; i++) { // array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        array.push(0);
        }

    for (j = 0; j < inputArray.length; j++) { // array = [1, 1, 0, 1, 1, 2, 1, 1, 1, 0, 1]
        array[inputArray[j]] += 1;
    }

    for (k = 0; k < array.length; k++) { // resultArray = [0, 1, 3, 4, 5, 5, 6, 7, 8, 10]
        for (v = array[k]; v > 0; v--) {
            resultArray.push(k); // **
        }
    }

    return resultArray;
    }

console.log(numberSort([1, 5, 4, 0, 6, 1, 7, 8, 5, 10]));
