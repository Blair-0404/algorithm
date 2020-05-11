// Given nums = [3,2,2,3], val = 3, nums=[2,2]


function solution(nums,val) {
  let curIdx = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[curIdx] = nums[i];
      curIdx++;
    }
  }
  return curIdx;
}

const nums = [3,2,2,3,4,5,6,6,6];
const val = 3;

console.log(solution(nums,val));