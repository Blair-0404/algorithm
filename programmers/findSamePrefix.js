function findSamePrefix(array) {
    const set = new Set(array);
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j < array[i].length; j++) {
            if (set.has(array[i].substr(0,j))) {
                return false;
            }
        }
    }
    return true;
}

//
// function findSamePrefix2(array) {
//     let tmp = array[0]; // 3
//     let samePrefix = false;
//
//     for (let i = 1; i < array.length; i++) {
//         if (tmp.length > array[i].length) {
//             tmp = array[i];
//         }
//     }
//
//     array.splice(array[tmp],1);
//
//     for (let j = 0; j < array.length; j++) {
//             samePrefix = array[j].includes(tmp);
//             if(samePrefix === true) {
//                 return false;
//         }
//     }
//
// }

function findSamePrefix3(array) {
    let tmp = 0;
    // let samePrefix = true;

    for (let i = 1; i < array.length; i++) {
        if (array[tmp].length > array[i].length) {
            tmp = i;
        }
    }

    const prefix = array[tmp];
    array.splice(tmp, 1);

    for (let j = 0; j < array.length; j++) {
        let samePrefix = true;
        for (let k = 0; k < prefix.length; k++) {
            if (prefix[k] === array[j][k]) {
                samePrefix = false;
            }
        }

        if (!samePrefix) {
            return samePrefix;
        }
    }

    return true;
}

function findSamePrefix4(array) {
    array.sort((a, b) => a.length - b.length);

    for (let i = 0; i < array.length - 1; ++i) {
        const prefix = array[i];
        for (let j = i + 1; j < array.length; ++j) {
            if (prefix === array[j].substr(0, prefix.length)) {
                return false;
            }
        }
    }

    return true;
}

console.log(findSamePrefix4(['123', '1234', '567', '88']));  // false