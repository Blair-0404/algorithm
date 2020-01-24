// function solution(genres, plays) {
//     const bestAlbumObj = new Object();
//     var answer = [];
//
//     for(let i = 0; i < genres.length; i++) {
//
//     }
//     return answer;
// }

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

// ex. {'classic' -> 2500, 'pop' -> 1000}
const accGenreListMap = new Map();
// ex. ['classic' -> [1,2,3], 'pop' -> ['10,11,15'], ...]
const genreIdListMap = new Map();

// 장르에 따른 누적 map 생성
for(let i = 0; i < genres.length; i++) { // O(n)
    if (accGenreListMap.has(genres[i])) {
        let tempScore = accGenreListMap.get(genres[i]);
        accGenreListMap.set(genres[i], tempScore + plays[i]);
    } else {
        accGenreListMap.set(genres[i], plays[i]);
    }

    if (genreIdListMap.has(genres[i])) {
        const idList = genreIdListMap.get(genres[i]);
        idList.push(i);
        genreIdListMap.set(genres[i], idList);
    } else {
        genreIdListMap.set(genres[i], [i]);
    }
}

// [ ['classic', 2500], ['pop', 1000] ]
const sortedGenres = Array.from(accGenreListMap).sort((first, second) => { // O(nlogn)
    return second[1] - first[1];
}).map((value) => value[0]); // ['classic', 'pop'];

let result = [];
for (let i = 0; i < sortedGenres.length; i++) { // O(n^2logn)
    const genre = sortedGenres[i]; // classic
    const idList = genreIdListMap.get(genre);
    idList.sort((first, second) => { // 1,2
        return plays[second] - plays[first];
    });
    const targetIds = idList.slice(0, 2); // <= 2
    result = [...result, ...targetIds];
}

console.log(result);