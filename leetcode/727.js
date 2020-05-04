function solution(nums) {
  let count = 1;
  let tmp = 0;

  for(let i = 1; i < nums.length ; i++) {

    if(nums[tmp] !== nums[i]) {
      count ++;
      tmp++;
    } else {
      tmp++;
    }
  }

  return count;
}

function solution1(nums) {
  let ret = [];

  for(let i = 0; i < nums.length ; i++) {
    if(ret[ret.length - 1] !== nums[i]) {
      ret.push(nums[i]);
    }
  }

  return ret.length;
}

function solution2(nums) {
  let hashSet = new Set();

  for(let i = 0; i < nums.length; i++) {
    if(!hashSet.has(nums[i])) {
      hashSet.add(nums[i])
      // console.log(hashSet)
    }
  }
  console.log(hashSet);
  return hashSet.size
}

const nums1 =[1,1,2,3,3,4,5,6,6,6,6,7,7,7,7,7,9];
const nums2 =[1,1,2];
const nums3 =[0];
console.log(solution(nums1));
console.log(solution(nums2));
console.log(solution(nums3));