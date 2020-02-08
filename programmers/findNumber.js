function solution(s) {
    const numberSet = new Set('0123456789');
    let tmp = true;

    for (let i = 0; i < s.length; i++) {
        tmp = numberSet.has(s[i]);
        if (!tmp) {
            return false;
        }
    }

    return tmp

}

console.log(solution('01234'));