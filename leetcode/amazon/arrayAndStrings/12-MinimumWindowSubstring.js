// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"


function solution(s, t) {

  let result = '';

  for (let startIdx = 0; startIdx <= s.length - t.length; startIdx++) {
    let endIdx = startIdx;
    const tMap = makeTMap(t);

    while (endIdx < s.length) {

      if (tMap.has(s[endIdx])) { // 갖고잇음 +1 해주기
        let tmpVal = tMap.get(s[endIdx]) - 1;
        tMap.set(s[endIdx], tmpVal);

        if(tMap.get(s[endIdx]) <= 0) {
          tMap.delete(s[endIdx])
        }
      }
      if (tMap.size === 0) {
        let tmp = s.slice(startIdx, endIdx + 1);
        if (result === '' || tmp.length < result.length) {
          result = tmp
        }
        break;
      }

      endIdx++;
    }
  }

  return result
}

const makeTMap = (t) => {
  const tmpMap = new Map();

  for (let i = 0; i < t.length; i++) {
    if(!tmpMap.has(t[i])) {
      tmpMap.set(t[i], 1)
    } else {
      let tmp = tmpMap.get(t[i]) + 1;
      tmpMap.set(t[i],tmp)
    }
  }
  return tmpMap;
};

console.log(solution("ADBCABC", "ABC")); // BCA
console.log(solution("ADOBECODEBANC", "ABC")); // BANC
console.log(solution("aassdaafaa", "aaa")); // 'afaa'
console.log(solution("aaaaaaaaaaaabbbbbcdd","abcdd")); // "abbbbbcdd"
console.log(solution("a", "aa")); // ''
console.log(solution("a", "b")); // ''
console.log(solution("a", "a")); // 'a'
console.log(solution("aa", "aa")); // 'aa'
