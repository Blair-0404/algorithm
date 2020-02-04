// 완전탐색node

function solution(answers) {
    let result = { 1: 0, 2: 0, 3: 0 };
    const routine = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < routine.length; j++) {
            if (routine[j][i % routine[j].length] === answers[i]) {
                result[j + 1] = result[j + 1] + 1;
            }
        }
    }

    let max = -1;
    return Object.entries(result).sort((first, second) => {
            const comp = parseInt(second[1]) - parseInt(first[1]);
            if (comp === 0) {
                return parseInt(first[0]) - parseInt(second[0]);
            }

            return comp;
        }).filter((item) => {
            if (item[1] === 0) {
                return false;
            } else if (max === -1) {
                max = item[1];
                return true;
            } else if (item[1] === max) {
                return true;
            }

            return false;
        }).map((item) => parseInt(item[0]));
}

const answer = [1,3,2,4,2];
console.log(solution(answer));