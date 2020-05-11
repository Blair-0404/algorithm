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


console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));