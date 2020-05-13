let lengthOfLongestSubstring = function (s) {
  let sSet = new Set();
  let resultLength = 0;
  let startIdx = 0;

  while (startIdx < s.length) {
    for (let i = startIdx; i < s.length; i++) {

      if (!sSet.has(s[i])) {
        sSet.add(s[i]);
      } else {
        if (resultLength < sSet.size) {
          resultLength = sSet.size;
        }
        startIdx++;
        sSet = new Set();
        break;
      }

    }
  }

  return resultLength;

};

function solution(s) {
  let sSet = new Set();
  let maxCount = 0;
  let startIdx = 0;

  while (s.length - startIdx > maxCount) {

    for (let i = startIdx; i < s.length; i++) {

      if (!sSet.has(s[i])) {
        sSet.add(s[i]);
      } else {
        if (sSet.size > maxCount) {
          maxCount = sSet.size;
        }
        sSet = new Set();
        startIdx++;
        break;
      }

    }
  }

  return maxCount
}


// console.log(lengthOfLongestSubstring("bbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring(" "));

// console.log(solution("bbbb"));
// console.log(solution("pwwkew"));
// console.log(solution("abcabcbb"));
console.log(solution(" "));