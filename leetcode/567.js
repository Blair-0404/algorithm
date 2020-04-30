// Input: [0,1,0,3,12] => Output: [1,3,12,0,0]


// 공간 만들어서 push 사용해서 구현
function solution(arr) {
  let zeroCount = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i])
    } else {
      zeroCount++;
    }
  }

  for (let j = 0; j <= zeroCount; j++) {
    result.push(0)
  }

  return result;
}

// swap 로직 사용해서 구현
// pos 는 배열의 끝까지 0으로 채워져야할 시작점(idx)을 의미한다. 즉 주어진 배열이 [1,2,3,0,4] 라면 최종적으로 pos는 4가 될 것이다.
// 1. for -  if) 배열은 원소가 0이아닐때마다.
//           arr[pos]는 arr[i]가 된다. (즉 배열중 (앞에서 0이 나오지 않았을 경우) 0이 아닌 원소들은 i가 증가하면서 pos도 똑같이 증가 했을테니 그대로 자리를 유지하지만
//                                    0이 나왔었다면 (pos < i 이므로) 0이있는 자리를 순차적으로 arr[i]로 바꿔가게 된다.
//           pos 는 증가한다,
// 2. for -  arr[pos]부터 배열의 끝까지 0으로 채워진다.
function swap1(arr) {
  let pos = 0;

  for (let curIdx = 0; curIdx < arr.length; curIdx++) {
    if (arr[curIdx] !== 0) {
      arr[pos] = arr[curIdx];
      pos++;
    }
  }

  for (let startIdxOfZero = pos; startIdxOfZero < arr.length; startIdxOfZero++) {
    arr[startIdxOfZero] = 0;
  }
  return arr
}

function swap2(arr) {
  let pos = 0;

  for (let curIdx = 0; curIdx < arr.length; curIdx++) {
    if (arr[curIdx] !== 0) {
      let tmp = arr[curIdx];
      arr[curIdx] = arr[pos];
      arr[pos] = tmp;
      pos++
    }
  }

  return arr
}

const arr = [1, 2, 0, 0,0,4];
console.log(swap2(arr));