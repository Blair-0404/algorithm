// counting 이용
function solution1(arrangement) {
    let resultNum = 0;
    let ironBarCount = 0;

    for (let i = 0; i < arrangement.length; i++) {
        if (arrangement[i] === '(') {
            ironBarCount += 1;
        } else {
            ironBarCount -= 1;
            if ((arrangement[i - 1]) === '(') {
                resultNum += ironBarCount;
            } else {
                resultNum += 1;
            }
        }
    }

    return resultNum;
}


// 스택을 이용
function solution2(arrangement) {
    let resultNum = 0;
    let stack = [];
    for (let i = 0; i < arrangement.length; i++) {
        if (arrangement[i] === '(') {
            stack.push(arrangement[i]);
        } else {
            stack.pop();
            if (arrangement[i - 1] === '(') {
                resultNum += stack.length;
            } else {
                resultNum += 1;
            }
        }
    }
    return resultNum;
}


console.log(solution1('()(((()())(())()))(())'));