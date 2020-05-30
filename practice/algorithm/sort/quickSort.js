function solution(arr) {

  let pivot = 0
  let startIdx = 0
  // let right = []


  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < arr[pivot]) {
      left.push(arr[i])
    } else if(arr[i] > arr[pivot]) {
      right.push(arr[i])
    }
  }
}


console.log(solution([3, 9, 4, 7, 0, 1, 5, 8, 6, 2]))