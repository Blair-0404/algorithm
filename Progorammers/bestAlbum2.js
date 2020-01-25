function makeBestAlbum(genres, plays) {

    const totalPlayCountOfGenres = new Map();
    const genreAndIdxList = new Map();

    for(let i = 0; i < genres.length; i++) {
        if(totalPlayCountOfGenres.has(genres[i])) {
            let currentPlayCounts = totalPlayCountOfGenres.get(genres[i]); // value를 얻음
            totalPlayCountOfGenres.set(genres[i], currentPlayCounts + plays[i]);
        } else {
            totalPlayCountOfGenres.set(genres[i], plays[i])
        }

        if(genreAndIdxList.has(genres[i])) {
            const idIdx = genreAndIdxList.get(genres[i]); // 2
            idIdx.push(i);
            genreAndIdxList.set(genres[i],idIdx);


        } else {
            genreAndIdxList.set(genres[i],[i])
        }
    }
    // return totalPlayCountOfGenres;

}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [100, 300, 200, 400, 3000];

console.log(makeBestAlbum(genres,plays));