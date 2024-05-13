function solution(m, n, puddles) {
  const dp = new Array(n + 1).fill(0).map((v) => new Array(m + 1).fill(0));
  dp[0][1] = 1;

  puddles.map((v) => (dp[v[1]][v[0]] = -1));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (dp[i][j] === -1) dp[i][j] = 0;
      else dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
    }
  }
  console.log(dp);
  return dp[n][m];
}
