function solution(brown, yellow) {
  const answer = [];
  const total = brown + yellow;

  for (let i = 3; i <= brown / 2; i++) {
    if (total % i !== 0) {
      continue;
    }
    if ((total / i) * (i - 2) - (i - 2) * 2 === yellow) {
      answer.push([i, total / i]);
    }
  }

  return answer[answer.length - 1];
}
