// function quickSort(arr){
//
//   if(arr.length < 2)
//     return arr;
//
//   var pivot = arr[Math.floor(arr.length/2)];
//   var middle = arr.filter(function (data) {return data == pivot;});
//   var lows = quickSort(arr.filter(function (data) {return data < pivot;}));
//   var highs = quickSort(arr.filter(function (data) {return data > pivot;}));
//
//   return lows.concat(middle).concat(highs);
// }

// 1) 피벗보다 우선순위가 낮은 값이 나올 때까지 low를 오른쪽으로 이동한다.
// 2) 피벗보다 우선순위가 높은 값이 나올 때까지 high를 왼쪽으로 이동한다.
// 3-1) 만약, low와 high가 교차되었다면, 피벗의 값과 high가 가리키는 값을 교환한다.
// 3-2) 그렇지 않다면, low와 high가 가리키는 값을 서로 바꾼다.
//

// 메모리 공간 만들면서 구현
function quickSort(array) {
  if (array.length < 2) { // 재귀를 계속 돌다보면 결국 left와 right의 길이는 1이될것이다.그것을 상상하면서 난 그저 현재 배열에서 left와 right를 쪼개는 것 이다.
    return array;
  }

  const pivot = [array[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([5, 3, 7, 1, 9]));


// swap으로 구현
function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }

  return array;
}




// 실패로직
function solution(arr) {

  let pivot = 0; // 피벗은 첫 원
  let low = pivot + 1;
  let high = arr.length - 1;

  while (low <= high) { // 엇갈리기 전까지만 반복
    while (arr[low] <= arr[pivot]) { // 피봇보다 큰 값을 만날때까지 low++
      low++;
    }

    while ((arr[high] >= arr[pivot]) && (high > pivot)) { // 피봇보다 작은 값을 만날떄까지 high--
      high--;
    }
  }

  if (low > high) {
    let tmp = arr[pivot];
    arr[pivot] = arr[high];
    arr[high] = arr[tmp];
  } else {
    let tmp = arr[low];
    arr[low] = arr[high];
    arr[high] = arr[tmp];
  }

  solution(arr)

  return arr
}

console.log(solution([5, 3, 7, 1, 9]));
// console.log(solution([3, 9, 4, 7, 0, 1, 5, 8, 6, 2]))
// console.log(solution([0, 50, 6, 3, 5, 2, 1, 2]))


