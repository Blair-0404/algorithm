// "CBD"	["BACDE", "CBADF", "AECB", "BDA"]
// return 2

function solution(skill, skill_trees) {
  let result = 0;
  const skillSet = new Set(skill.split(''));

  for (let i = 0; i < skill_trees.length; i++) {
    const tmpArr = skill_trees[i].split('');
    const tmpSet = new Set();

    for (let j = 0; j < tmpArr.length; j++) {
      if (skillSet.has(tmpArr[j]) && !tmpSet.has(tmpArr[j])) {
        tmpSet.add(tmpArr[j]);
      }
    }

    let curIdx = 0;
    let isSame = true;

    while (curIdx < tmpSet.size) {
      if (Array.from(skillSet)[curIdx] !== Array.from(tmpSet)[curIdx]) {
        isSame = false;
        break;
      }
      curIdx++;
    }

    if (isSame) {
      result++;
    }
  }

  return result;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "CBA", "CCDDD"])); // 3