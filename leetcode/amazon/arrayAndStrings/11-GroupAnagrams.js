// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// 해쉬맵에 str과 인덱스저장
function solution1(strs) {
  const strsMap = new Map();
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let tmpStr = strs[i].split('').sort().join();

    if (!strsMap.has(tmpStr)) {
      strsMap.set(tmpStr, [i])
    } else {
      let updateValue = strsMap.get(tmpStr);
      strsMap.set(tmpStr, [...updateValue, i])
    }
  }

  strsMap.forEach((val) => {
    let tmpRet = [];
    let i = 0;
    while (i < val.length) {
      tmpRet.push(strs[val[i]]);
      i++;
    }

    result.push(tmpRet.sort())
  });

  return result
}

// 해쉬맵에 저장할떄부터 인덱스가아닌 값을 정렬하며 저장해서 나중에는 리턴할때 맵의 키들만 배열로 묶어서 리턴!
// 훨씬 짧아짐! ( 메모리 효율도 더 높아짐!)
function solution2(strs) {

  const strsMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    let tmpStr = strs[i].split('').sort().join();

    if (!strsMap.has(tmpStr)) {
      strsMap.set(tmpStr, [strs[i]])
    } else {
      let updateValue = strsMap.get(tmpStr);
      strsMap.set(tmpStr, [...updateValue, strs[i]].sort())
    }
  }


  return Array.from(strsMap.values())
}


console.log(solution2(["eat", "tea", "tan", "ate", "nat", "bat"]));