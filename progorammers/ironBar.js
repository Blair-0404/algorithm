// 실패한 풀이
// function solution(arrangement) {
//     let resultNum = 0;
//     let ironBarCount = 0;
//
//     for (let i = 0; i < arrangement.length; i++) {
//         if (arrangement[i] === '(') {
//             ironBarCount += 1;
//         } else if ((arrangement[i - 1] && arrangement[i - 2]) === '(') {
//             ironBarCount -= 1;
//             resultNum += ironBarCount;
//         } else if ((arrangement[i - 1] === '(') && (arrangement[i - 2] === ')')) {
//             ironBarCount -= 1;
//         } else {
//             resultNum += 1;
//         }
//     }
//     return resultNum;
// }


// 스택을 이용해서 풀었어야 한다.
function solution(arrangement) {
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


console.log(solution('()(((()())(())()))(())'));