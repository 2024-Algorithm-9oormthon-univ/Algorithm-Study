function solution(brown, yellow) {
  // yellow / i: 노란색 가로 길이, i: 노란색 세로 길이
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    const border = 2 * (yellow / i + 2) + 2 * i;
    if (yellow % i === 0 && brown === border) {
      return [yellow / i + 2, i + 2];
    }
  }
}

console.log(solution(24, 24));
