function solution(arr, divisor) {
    let answer = [];
    let wrongAnswer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        } else {
            wrongAnswer.push(arr[i]);
        }
    }

    if (answer.length === 0) {
        answer.push(-1);
    } else {
        answer.sort();
    }
    return answer = answer.sort((a, b) => a - b);
}
let arr = [10, 8, 6, 4, 2, 5, 7];
console.log(solution(arr, 2));


// 맵, 필터로도 구현해보기
