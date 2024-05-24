function solution(citations) {
  const max = Math.max(...citations);
  let hIndex = 0;

  for (let i = 1; i <= max; i++) {
    const arr = [...citations];
    const over = [];

    for (const citation of citations) {
      if (citation >= i) {
        over.push(arr.splice(arr.indexOf(citation), 1));
      }
    }

    if (over.length >= i) {
      hIndex = i;
    }
  }

  return hIndex;
}
