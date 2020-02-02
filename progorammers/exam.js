// 완전탐색

function solution(answers) {
    let result = [0, 0, 0];
    const routine = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    // let array = [{1: 0}, {2: 0}, {3: 0}];

    for (let i = 0; i < answer.length - 1; i++) {
        for (let j = 0; j < routine.length - 1; j++) {
            while (answers.length !== 0) {
                if (routine[j].length <= answers.length) {
                    if (routine[j][i] === answers[i]) {
                        result[j] += 1;
                    }
                } else {

                }
            }

        }
        return result;
    }
}


const answer = [1, 2, 3, 4, 5];
console.log(solution(answer));