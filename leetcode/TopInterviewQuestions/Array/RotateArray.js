// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// 1. 반복문 돌면서 splice, unshift사용해서 뒤에서 빼서 앞으로 넣기
function solution1(nums, k) {

  while (k > 0) {
    const tmp = nums.splice(nums.length - 1, 1);
    nums.unshift(...tmp);
    k--;
  }

  return nums
}

// 2. 반복문 돌면서 slice와 spread사용해서 맨 앞으로 옮길 원소 + 나머지 기존원소들 합쳐주기
function solution2(nums, k) {
  for (let i = 0; i < k; i++) {
    let rest = nums.slice(0, nums.length - 1);
    let end = nums[nums.length - 1];

    nums = [end, ...rest]
  }
  return nums
}

// 3. 내장된 메서드 사용하지 않고 swap사용해서 구현
//    한자리씩 뒤로 밀려나는것을 구현
function solution3(nums, k) {

  while (k > 0) {
    let start = nums[0];
    let endIdx = nums.length - 1;

    nums[0] = nums[endIdx];

    for (let i = endIdx; i > 0; i--) {
      nums[i] = nums[i - 1];

      if (i === 1) {
        nums[i] = start
      }
    }

    k--;
  }
  return nums
}

console.log(solution3([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(solution3([-1, -100, 3, 99], 2)); // [ 3, 99, -1, -100 ]
console.log(solution3([1, 2], 1)); // [2,1]