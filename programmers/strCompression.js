function solution(s) {
    let result = s.length;

    for (let unit = 1; unit <= s.length / 2; ++unit) {
        result = Math.min(result, compression(s, unit));
    }

    return result;
}

function compression(s, unit) {
    let length = s.length;
    let count = 0;
    let firstPos = 0;
    let secondPos = firstPos + unit;

    while (secondPos < s.length) {
        let isAvailable = true;

        for (let delta = 0; delta < unit; ++delta) {
            if (s[firstPos + delta] !== s[secondPos + delta]) {
                isAvailable = false;
                break;
            }
        }

        if (isAvailable) {
            count = count === 0 ? 2 : count + 1;
            secondPos += unit;
            length -= unit;
        } else {
            if (count !== 0) {
                length += (count + '').length;
                count = 0;
            }

            firstPos = secondPos;
            secondPos = firstPos + unit;
        }
    }

    if (count !== 0) {
        length += (count + '').length;
    }

    return length;
}


const str = [...Array(100).keys()].map(() => 'e').join('');
console.log(solution(`abc${str}`));
// console.log(solution('aabbaccc'));