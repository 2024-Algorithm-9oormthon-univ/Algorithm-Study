function solution(prices) {
  // 결과 값 저장할 배열
  const stack = Array(prices.length).fill(0);

  // 순차적 실행
  for (let i = 0; i < prices.length - 1; i++) {
    // 현재 index 다음부터 실행
    for (let j = i + 1; j < prices.length; j++) {
      // 만약 현재 가격이 더 높다면 반복문 탈출
      if (prices[i] > prices[j]) {
        stack[i] += 1;
        break;
      }
      // 그렇지 않다면 1 증가 후 계속
      else stack[i] += 1;
    }
  }
  return stack;
}

console.log(solution([1, 2, 3, 2, 3]));
