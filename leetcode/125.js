function solution(s) {
  let arr = [];
  let isP = true;

  if (s.length <= 1) {
    return true
  }
  for (let i = 0; i < s.length; i++) {
    if ((s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90)
      || (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122)
      || (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57)) {
      arr.push(s[i].toUpperCase());
    }
  }

  let checkCount = Math.floor(arr.length / 2);

  for (let j = 0, k = arr.length - 1; j < checkCount; j++) {
    if (arr[j] !== arr[k]) {
      return false
    }
    k--;
  }

  return isP;
}


console.log(solution("")); // true
console.log(solution(" ")); // true
console.log(solution("A man, a plan, a canal: Panama")); // true
console.log(solution("a")); // true
console.log(solution("a.")); // true
console.log(solution(",; W;:GlG:;l ;,")); // false
console.log(solution("0P")); // false
console.log(solution("race a car")); // false

