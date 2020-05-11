// 문제를 이해하는것이 매우 중요했다..!
// 단순히 넘버가 몇개있는지를 체크하는것이 아니라 배열을 새롭게 리턴시키는게 포인트였다.!
// Given nums = [0,0,1,1,1,2,2,3,3,4] return 5(길이) nums = [0,1,2,3,4,2,2,3,3,4]

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

const nums1 =[1,1,2,3,3,4,5,6,6,6,6,7,7,7,7,7,9];
const nums2 =[1,1,2];
const nums3 =[0];
console.log(solution(nums1));
console.log(solution(nums2));
console.log(solution(nums3));