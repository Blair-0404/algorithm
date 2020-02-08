function solution(n) {
    let answer = '';
    let count = 1;


    if (n % 2 === 0) {
        count = n / 2;
        for (let i = 0; i < count; i++) {
            answer += '수박';
        }
    } else {
        count = (n - 1) / 2;
        for (let j = 0; j < count; j++) {
            answer += '수박';
        }
        answer += '수';
    }

    return answer;
}

console.log(solution(2));