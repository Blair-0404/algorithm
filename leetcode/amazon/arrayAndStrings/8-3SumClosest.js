// Given array nums = [-1, 2, 1, -4], and target = 1.
//
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function solution(nums, target) {
  nums = nums.sort((a,b) => a -b)

  let tmpRet = nums[0] + nums[1] + nums[2]

  if (nums.length <= 3) {
    return tmpRet
  }

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {

      let tmpSum = nums[i] + nums[left] + nums[right];

      if (tmpSum === target) {
        tmpRet = tmpSum;
        return tmpRet
      } else {
        if (Math.abs(target - tmpSum) < Math.abs(target - tmpRet)) {
          tmpRet = tmpSum;
        }
      }

      if (tmpSum < target) {
        left++;
      } else if (tmpSum > target) {
        right--;
      }

    }
  }

  return tmpRet
}

// console.log(solution([-1, 3, -1, 4, 5], 1))
console.log(solution([1,1,1,0], -100)) // 2
console.log(solution([-3,-2,-5,3,-4], -1)) // -2