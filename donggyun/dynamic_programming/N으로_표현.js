function solution(N, number) {
  const dp = new Array(9).fill().map(() => new Set());
  for (let i = 1; i < 9; i++) {
    dp[i].add(Number(`${N}`.repeat(i)));
    for (let j = 1; j < i; j++) {
      for (const arg1 of dp[j]) {
        for (const arg2 of dp[i - j]) {
          dp[i].add(arg1 + arg2);
          dp[i].add(arg1 - arg2);
          dp[i].add(arg1 * arg2);
          if (arg2 !== 0) {
            dp[i].add(Math.floor(arg1 / arg2));
          }
        }
      }
    }
    if (dp[i].has(number)) return i;
  }
  return -1;
}

console.log(solution(5, 12));
