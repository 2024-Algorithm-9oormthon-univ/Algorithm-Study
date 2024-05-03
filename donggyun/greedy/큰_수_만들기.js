function solution(number, k) {
  const stack = [];
  let cnt = 0;

  for (const n of number) {
    // 본인보다 더 큰 수가 나올 때까지 스택에서 제거
    while (stack.length && stack[stack.length - 1] < n && cnt < k) {
      stack.pop();
      cnt++;
    }
    stack.push(n);
  }
  for (let i = cnt; i < k; i++) stack.pop();
  return stack.join("");
}
