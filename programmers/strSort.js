function solution(strings, n) {
    strings.sort((a, b) => {
        const comp = a[n].charCodeAt(0) - b[n].charCodeAt(0);
        if (comp === 0) return a.localeCompare(b);

        return comp;
    });

    return strings;
}


console.log(solution(['abce', 'abcd', 'cdx'], 2));