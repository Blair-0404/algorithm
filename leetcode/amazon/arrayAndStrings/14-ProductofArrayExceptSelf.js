// Input:  [1,2,3,4]
// Output: [24,12,8,6]

function solution(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    let tmp = 1;

    while (j < nums.length) {
      if (i !== j) {
        tmp = tmp * nums[j];
      }
      j++
    }

    result.push(tmp)
  }

  return result
}

console.log(solution([1,2,3,4]))