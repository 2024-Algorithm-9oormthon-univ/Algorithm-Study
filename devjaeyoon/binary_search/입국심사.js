function solution(n, times) {
  const ascTimes = times.sort((a, b) => a - b);
  let left = 1;
  let right = ascTimes[ascTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const total = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    total < n ? (left = mid + 1) : (right = mid - 1);
  }

  return left;
}
