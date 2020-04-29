// for, sort사용 ( 불통 )
function solution1(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    const startIndex = commands[i][0] - 1;
    const endIndex = commands[i][1];
    const idx = commands[i][2] - 1;

    const arraySlice = array.slice(startIndex, endIndex).sort();

    result.push(arraySlice[idx]);
  }

  return result;
}

// ( 통과 )
function solution2(array, commands) {
  let retArr = [];

  for (let i = 0; i < commands.length; i++) {
    let sortedSlicedArr = array.slice((commands[i][0] - 1), commands[i][1]).sort((a, b) => (a - b));
    const targetIdx = commands[i][2] - 1;
    retArr.push(sortedSlicedArr[targetIdx]);
  }

  return retArr
}

// ( 통과 - 제일 빨랐다. )
// array 고차원 함수 forEach 사용
function solution3(array, commands) {
  let retArr = [];

  commands.forEach((val) => {
    let sortedSlicedArr = array.slice((val[0] - 1), val[1]).sort((a, b) => (a - b));
    const targetIdx = val[2];
    retArr.push(sortedSlicedArr[targetIdx - 1]);
  });
  return retArr
}

// 버블정렬 추가 공부
function bubbleSort(array) {
  for (let i = 1; i < arr.length; i++) {
    let tmp;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp
      }
    }
  }
  return array;
}

// 선택정렬 추가 공부
function selectionSort(array) {
  for (let curIdx = 0; curIdx < array.length; curIdx++) {
    let minIdx = curIdx;
    for (let comparedIdx = curIdx + 1; comparedIdx < array.length; comparedIdx++) {
      if (array[minIdx] > array[comparedIdx]) {
        minIdx = comparedIdx;
      }
    }
    let tmpVal = array[curIdx];
    array[curIdx] = array[minIdx];
    array[minIdx] = tmpVal;
  }
  return array

}

const array = [6, 1, 2, 3, 4, 5];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(selectionSort(array));
