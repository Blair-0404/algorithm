function solution(citations) {
    citations.sort((a,b) => a - b);

    let hIdx = Math.floor(citations.length / 2);

    return citations[hIdx];
}

console.log(solution([3, 0, 6, 1, 5]));