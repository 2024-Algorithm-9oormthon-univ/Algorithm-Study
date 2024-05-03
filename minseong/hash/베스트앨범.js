function solution(genres, plays) {
    const genreMap = {};
    
    // 장르별로 노래 정보와 총 재생 횟수를 매핑
    genres.forEach((genre, index) => {
        if (!genreMap[genre]) {
            genreMap[genre] = { total: 0, songs: [] };
        }
        genreMap[genre].total += plays[index];
        genreMap[genre].songs.push({ index, plays: plays[index] });
    });
    
    // 각 장르별로 노래를 재생 횟수에 따라 내림차순 정렬
    Object.values(genreMap).forEach(item => {
        item.songs.sort((a, b) => b.plays - a.plays);
    });
    
    // 장르를 총 재생 횟수에 따라 내림차순 정렬
    const sortedGenres = Object.keys(genreMap).sort((a, b) => genreMap[b].total - genreMap[a].total);
    
    const answer = [];
    // 각 장르별로 최대 2개의 노래 고유 번호를 선택
    sortedGenres.forEach(genre => {
        genreMap[genre].songs.slice(0, 2).forEach(song => {
            answer.push(song.index);
        });
    });
    
    return answer;
}
