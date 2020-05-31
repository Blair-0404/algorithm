// 앞에서부터 두개씩 비교하며 더 큰거를 뒤로 보내가면서 큰 숫자먼저 맨뒤에 픽스시키면서 정렬하는 방식
// ( 뒤부터 자리가 픽스됨 )

function solution(arr) {

  for(let i = arr.length; i > 0; i--) {

    let j = 0;

    while(j < i) {
      if(arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp
      }
      j++;
    }

  }

  return arr
}

console.log(solution([3, 4, 5, 2, 6, 7, 9, 1, 8, 0]))