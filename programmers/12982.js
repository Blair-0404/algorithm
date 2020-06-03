//    [1,3,2,5,4]	9	3
//    [2,2,3,3]	10	4

function solution(d, budget) {
  let result = d.length;

  d = d.sort((a,b) => a -b);

  let totalSum = d.reduce((acc, val) => {
    return acc += val
  }, 0);

  if (totalSum <= budget) {
    return result
  } else {

    while (totalSum > budget) {
      totalSum = totalSum - d[result -1];
      result--;
    }
  }

  return result
}


console.log(solution([1, 3, 2, 5, 4], 9)) //3
console.log(solution([2, 2, 3, 3], 10)) //4
console.log(solution([2, 2, 3, 10], 10)) //3