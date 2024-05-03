function solution(genres, plays) {
  const chart = genres.reduce((obj, genre, i) => {
    if (!obj[genre]) {
      obj[genre] = { playCount: plays[i], list: [] };
    } else {
      obj[genre].playCount += plays[i];
    }
    obj[genre].list.push([i, plays[i]]);

    return obj;
  }, {});

  const sorted = Object.values(chart).sort((a, b) => {
    return b.playCount - a.playCount;
  });

  const answer = sorted.reduce((acc, genre) => {
    genre.list.sort((a, b) => {
      return b[1] - a[1];
    });
    acc.push(genre.list[0][0]);

    if (genre.list.length > 1) {
      acc.push(genre.list[1][0]);
    }
    return acc;
  }, []);

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
