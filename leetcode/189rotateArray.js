// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// 내장함수 스택, 쿠로 구현
function solution1(nums,k) {
  for(let i = 0; i < k; i++) {
    let endPoint = nums.pop();
    nums.unshift(endPoint);
  }
  return nums
}

function solution2(nums,k) {
  for(let i = 0; i < k; i++) {
    let rest = nums.slice(0,nums.length - 1);
    let end = nums[nums.length - 1];

    nums = [end, ...rest]
  }
  return nums
}

const nums = [1,2,3,4,5,6,7];
const k = 3;

console.log(solution2(nums,k));