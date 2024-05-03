function solution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      let idx = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    let idx = stack.pop();
    answer[idx] = prices.length - idx - 1;
  }

  return answer;
}
