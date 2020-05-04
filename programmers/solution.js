function betAlbum(genres, plays) {

  const totalPlaysOfGenre = new Map();
  const idxListOfGenre = new Map();
  let resultArr = [];

  for (let i = 0; i < genres.length; i++) {
    if (!totalPlaysOfGenre.has(genres[i])) {
      totalPlaysOfGenre.set(genres[i], plays[i])
    } else {
      let addPlays = totalPlaysOfGenre.get(genres[i]) + plays[i];
      totalPlaysOfGenre.set(genres[i], addPlays)
    }

    if (!idxListOfGenre.has(genres[i])) {
      idxListOfGenre.set(genres[i], [i]);
    } else {
      let tmpValue = idxListOfGenre.get(genres[i]);
      tmpValue.push(i);
      idxListOfGenre.set(genres[i], tmpValue)
    }
  }

  let sortedTotalPlaysOfGenre = Array.from(totalPlaysOfGenre).sort((a, b) => {
    return b[1] - a[1]
  });

  for (let i = 0; i < sortedTotalPlaysOfGenre.length; i++) {
    let tmpIdx = idxListOfGenre.get(sortedTotalPlaysOfGenre[i][0]);
    let ARR = [];
    for (let j = 0; j < tmpIdx.length; j++) {
      ARR.push([...[tmpIdx[j], plays[tmpIdx[j]]]])
    }
    ARR.sort((a, b) => (b[1] - a[1]));
    for (let k = 0; k < 2; k++) {
      resultArr.push(ARR[k][0])
    }
  }

  return resultArr
}



function str2(str) {
  let strMap = new Map();

  for (let j = 0; j < str.length; j++) {
    strMap.set(str[j], 0);
  }

  for (let i = 0; i < str.length; i++) {
    let tmp = strMap.get(str[i]) + 1;
    strMap.set(str[i], tmp)
  }

  let Arr = Array.from(strMap);

  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i][1] === 1) {
      return Arr[i][0]
    }
  }
}

// console.log(str2('total'));

function remove(s, del) {
  let ret = [];
  const sArr = s.split('');
  const sSet = new Set(del);

  for (let i = 0; i < sArr.length; i++) {
    if (!sSet.has(sArr[i])) {
      ret.push(sArr[i])
    }
  }

  return ret
}
//
// const s = 'appleoooobbbc';
// const del = 'peob';
// console.log(remove(s, del));


function test(num) {

  // let sqrt = Math.sqrt(num);
  // if(num === (sqrt*sqrt)) {
  //   return sqrt;
  // }

  for(let i = 0; i < 500; i++) {
    if(num === 1) {
      return i
    } else {
      if(num % 2 === 0) {
        num = num / 2
      } else if(num % 2 === 1) {
        num = (num*3) + 1;
      }
    }
  }

  return -1
}
// console.log(test(626331))

// const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
// const plays = [500, 600, 150, 800, 2500];
// console.log(solution2(genres, plays));

function searchIndexFirstNonRepeated (s) {
  let result = -1;

  if(s.length === 0) {
    return -1
  }

  const sMap = new Map();

  for(let i = 0; i < s.length; i++) {
    if(!sMap.has(s[i])) {
      sMap.set(s[i], 0);
    } else {
      let tmp = sMap.get(s[i]) + 1;
      sMap.set(s[i], tmp)
    }
  }

  for(let j = 0; j < s.length; j++) {
    if(sMap.get(s[j]) === 0) {
      result = j
      break;
    }
  }

  return result
}

const s1 = "leetcode";
const s2 = "";
const s3 = "cc";

console.log(searchIndexFirstNonRepeated(s1));
console.log(searchIndexFirstNonRepeated(s2));
console.log(searchIndexFirstNonRepeated(s3));