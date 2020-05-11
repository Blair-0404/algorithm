//   Given nums = [2, 7, 11, 15], target = 9,
//   Because nums[0] + nums[1] = 2 + 7 = 9,
//   return [0, 1].


function solution(nums, target) {
  let result = [];

  for (let tmpIdx = 0; tmpIdx < nums.length; tmpIdx++) {
    for (let i = tmpIdx + 1; i < nums.length; i++) {
      if (!nums[tmpIdx] < target && nums[tmpIdx < target]) {
        break;
      } else {
        if (nums[tmpIdx] + nums[i] === target) {
          result = [tmpIdx, i]
        }
      }
    }
  }


  return result
}

const nums = [2, 7, 11, 15];
const target = 13;

console.log(solution(nums, target));