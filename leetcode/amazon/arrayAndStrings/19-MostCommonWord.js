// 문자에서 가장 자주나온 단어 리턴하기(금지어 제외)

// Input:paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
//       banned = ["hit"]
// Output: "ball"

function solution(paragraph, banned) {
  const bannedWordSet = new Set(banned);
  const wordsMap = new Map();
  let splittedSentence = paragraph.toLowerCase().split(" ");
  let result = '';

  for(let i = 0; i < splittedSentence.length; i++) {
    let tmp = '';

    splittedSentence[i].split('').forEach((val) => {
      if(val.charCodeAt(0) >= 97 && val.charCodeAt(0) <= 122) {
        tmp += val
      }
    });

    if(!bannedWordSet.has(tmp)) {
      if(!wordsMap.has(tmp)) {
        wordsMap.set(tmp,0)
      } else {
        let tmpVal = wordsMap.get(tmp) + 1;
        wordsMap.set(tmp,tmpVal)
      }

      if(!result || (wordsMap.get(result) < wordsMap.get(tmp))) {
        result = tmp
      }
    }
  }

  return result
}

console.log(solution("Bob hit a ball, the hit BALL flew far after it Was hit. was Was", ["hit", "ball"]))
console.log(solution("a, a, a, a, b,b,b,c, c",["a"]))