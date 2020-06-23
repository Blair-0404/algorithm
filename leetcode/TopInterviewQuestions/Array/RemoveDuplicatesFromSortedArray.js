function removeDuplicates1(nums) {
  let tmpPos = 0;

  for(let cur = 0; cur < nums.length; cur++) {
    if(nums[tmpPos] !== nums[cur]) {
      tmpPos++;
      nums[tmpPos] = nums[cur];
    }
  }
  return ++tmpPos
}


function removeDuplicates2(nums) {

  if (!nums.length) {
    return 0
  }

  let tmpPos = 0;
  let count = nums.reduce((acc, cur, idx, arr) => {

    if (arr[tmpPos] !== cur) {
      acc++;
      arr[++tmpPos] = cur;
    }

    return acc
  }, 1);

  return count;
}




console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // 5
console.log(removeDuplicates2([1, 1, 2])) // 2
console.log(removeDuplicates2([])) // 2