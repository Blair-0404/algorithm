function solution(arr) {

  for (let i = 1; i < arr.length; i++) {

    let curIdx = i;
    let isTrue = true;

    while (isTrue) {
      let tmpIdx = curIdx - 1;

      if (arr[curIdx] < arr[tmpIdx]) {
        let tmp = arr[curIdx];
        arr[curIdx] = arr[tmpIdx];
        arr[tmpIdx] = tmp;
        curIdx--;
      } else {
        isTrue = false;
      }
    }
  }
  return arr
}

console.log(solution([4, 2, 7, 1, 3]));
console.log(solution([8, 4, 2, 3]));