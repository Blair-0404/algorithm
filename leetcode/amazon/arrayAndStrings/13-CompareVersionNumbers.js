// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Input: version1 = "1.0.1", version2 = "1"
// Output: 1
// Input: version1 = "7.5.2.4", version2 = "7.5.3"
// Output: -1
// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0

function solution(version1, version2) {
  const ver1 = version1.split('.');
  const ver2 = version2.split('.');
  let result = 0;

  let i = 0;
  while (i < ver1.length || i < ver2.length) {
    const tmpA = parseInt(ver1[i]);
    const tmpB = parseInt(ver2[i]);

    if(tmpA === tmpB) {
      result = 0;
      i++;
    } else {

      if((tmpA === 0 || !tmpA) && (tmpB === 0 || !tmpB)) {
        i++
      } else if(tmpA > tmpB || !ver2[i]) {
        return 1;
      } else if(tmpA < tmpB || !ver1[i]) {
        return -1;
      }

    }
  }

  return result
}

console.log(solution("0.1", "1.1")) // -1
console.log(solution("1.0.1", "1")) // 1
console.log(solution("7.5.2.4", "7.5.3")) // -1
console.log(solution("1.01", "1.001")) // 0
console.log(solution("1.0", "1.0.0")) // 0