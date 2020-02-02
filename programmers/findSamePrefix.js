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

