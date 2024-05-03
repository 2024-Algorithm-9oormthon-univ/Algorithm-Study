function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let duration = 0;
    for (let j = i + 1; j < prices.length; j++) {
      duration++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(duration);
  }

  return answer;
}
