// 문자열을 정수로

function solution(s) {
    let result = 0;

    for (let i = s.length - 1; i >= 1; i--) {
        for (let j = 1; j <= s.length; j * 10) {
            result += (parseInt(s[i]) * j);
        }
    }

    if (s[0] === '-') {
        let tmp = -1;
        result = tmp * result;
    }
    return result;
}


console.log(solution('-124'));
