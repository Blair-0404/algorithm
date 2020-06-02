// "CBD"	["BACDE", "CBADF", "AECB", "BDA"]
// return 2

function solution(skill, skill_trees) {
  let result = 0;

  const skillSet = skill.split('').reduce((acc, val) => {
    acc.add(val);
    return acc
  }, new Set());

  skill_trees.forEach((val) => {
    let tmpArr = val.split('');
    let curIdx = 0;
    let tmpSet = new Set();

    while(curIdx < tmpArr.length) {
      if(skillSet.has(tmpArr[curIdx])) {
        tmpSet.add(tmpArr[curIdx]);
        curIdx++;
      } else {
        curIdx++;
      }
    }

    let tmp =  Array.from(tmpSet);
    let isTrue = false;

    for(let i = 0; i < tmp.length; i++) {
      if(Array.from(tmpSet)[i] === Array.from(skillSet)[i]) {
        isTrue = true;
      } else {
        isTrue = false;
        break;
      }
    }

    if(isTrue) {
      result++;
    }

  });

  return result;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2