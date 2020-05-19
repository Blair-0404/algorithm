// Input: haystack = "hello", needle = "ll"
// Output: 2
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

function solution(haystack,needle) {

  for(let i = 0; i <= haystack.length - needle.length; i++) {
    let tmp = haystack.slice(i,i + needle.length);

    if(tmp === needle) {
      return i
    }
  }

  return -1
}

console.log(solution("hello","ll"));
console.log(solution("aaaaa","bba"));
console.log(solution("asdfgaas","aas"));
console.log(solution("asdfgaas",""));