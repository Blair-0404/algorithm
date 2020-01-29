function makeBestAlbum(genres, plays) {
    const genreAndPlayCountMap = new Map();
    const genreAndIdxListMap = new Map();

// 키:장르별 값:누적재생수 Map 구현
// ex. {'classic' -> 2500, 'pop' -> 1000}
    for (let i = 0; i < genres.length; i++) { // O(n)
        if (genreAndPlayCountMap.has(genres[i])) {
            let currentPlayCounts = genreAndPlayCountMap.get(genres[i]); // .get은 genres[i]의 value를 뽑아낸다!
            genreAndPlayCountMap.set(genres[i], currentPlayCounts + plays[i]);
        } else {
            genreAndPlayCountMap.set(genres[i], plays[i]);
        }

// 키:장르별 값:인덱스들이 들어있는 배열 Map 구현
// ex. ['classic' -> [1,3,5,8...], 'pop' -> ['10,11,15'], ...]
        if (genreAndIdxListMap.has(genres[i])) {
            const idList = genreAndIdxListMap.get(genres[i]);
            idList.push(i);
            genreAndIdxListMap.set(genres[i], idList);
        } else {
            genreAndIdxListMap.set(genres[i], [i]);
        }
    }

// genreAndPlaycountMap을 배열로 변환-정렬 후 장르만 뽑기
// [ ['classic', 2500], ['pop', 1000] ]  => ['classic', 'pop']
    const sortedGenres = Array.from(genreAndPlayCountMap).sort((first, second) => { // O(nlogn)
        return second[1] - first[1];
    }).map((value) => value[0]);

    let result = [];

    for (let i = 0; i < sortedGenres.length; i++) { // O(n^2logn)
        const genre = sortedGenres[i]; // classic
        const idxList = genreAndIdxListMap.get(genre); // [1,3,5,8...]
        idxList.sort((first, second) => {
            return plays[second] - plays[first]; // genres의idx = plays의idx 이므로
        });

        const targetIdx = idxList.slice(0, 2); // [3,5]
        result = [...result, ...targetIdx]; // result = [ [],[3,5] ]가 되면안되기 때문에 배열을 다 찢어서 다시 감싸서 넣기
    }

    return result;
}


const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

console.log(makeBestAlbum(genres, plays));