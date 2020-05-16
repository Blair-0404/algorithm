// Input: [3,0,1]
// Output: 2
//
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// 가우스..?
function solution2(nums) {

  nums = nums.sort((a, b) => (b - a));

  for (let i = 0, j = nums.length; i <= nums.length; i++) {
    if (nums[i] !== j) {
      return j
    }
    j--;
  }

}


// const nums = [9,6,4,2,3,5,7,0,1]
// const nums = [0, 1] //1
const nums = [3, 0, 1] //1
// const nums = [1] // 0
console.log(solution2(nums))