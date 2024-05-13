function solution(triangle) {
  const dp = new Array(triangle.length).fill().map(() => new Array());
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      dp[i][j] =
        Math.max(dp[i - 1][j - 1] || 0, dp[i - 1][j] || 0) + triangle[i][j];
    }
  }

  return Math.max(...dp[triangle.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
