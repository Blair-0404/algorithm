function solution(clothes) {
    let answer = 1;
    let clothesObj = {};

    for (let i = 0; i < clothes.length; i++) {
        if (clothesObj[clothes[i][1]] >= 1) {
            clothesObj[clothes[i][1]] += 1;
        } else {
            clothesObj[clothes[i][1]] = 1;
        }
    }

    for (const key in clothesObj) {
        answer *= (clothesObj[key] + 1);
    }
    return answer - 1;
}
console.log(solution());







function solution2(clothes) {
    let answer = 1;
    let map = new Map();

    for (let i = 0; i < clothes.length; i++) {
        if (map.has(clothes[i][1])) {
            map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
        } else {
            map.set(clothes[i][1], 1);
        }
    }

    return [...map.values()].reduce((acc, value) => acc * (value + 1), 1) - 1;
}
console.log(solution2());