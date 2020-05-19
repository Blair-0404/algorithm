function solution(matrix) {
  let result = JSON.parse(JSON.stringify( matrix ));

  for (let i = 0; i < matrix.length; i++) {
    let j = 0;
    let k = matrix.length - 1;

    while (k >= 0) {
      result[i][j] = matrix[k][i];
      j++;
      k--;
    }
  }

  return result
}

console.log(solution([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));

console.log(solution([
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]));