//앞에서부터 한개씪 체크하면서 제일 작은것을 찾아서 0번쨰 자리부터 픽스해나가는 방
// 앞부터 자리가 픽스됨
function solution(array) {
  for(let i = 0; i < array.length; i++) {

    let tmpMinIdx = i;

    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[tmpMinIdx]) {
        tmpMinIdx = j
      }
    }

    let tmp = array[i];
    array[i] = array[tmpMinIdx];
    array[tmpMinIdx] = tmp;
  }

  return array

}

console.log(solution([3, 4, 5, 2, 6, 7, 9, 1, 8, 0]));