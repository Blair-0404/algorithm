// Given nums = [0,0,1,1,1,2,2,3,3,4] return 5

function solution(nums) {

  let i = 0;

  for(let k = 0; k < nums.length; k++) {
    if(nums[i] !== nums[k]) {
      i++;
      nums[i] = nums[k];
    }
  }
  return ++i
}

const nums = [0,0,1,1,2,3];
console.log(solution(nums));