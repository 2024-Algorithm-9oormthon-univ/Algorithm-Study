// +일 때와 -일 때를 나누어서 생각해야함
// 깊이 우선으로 하나씩 처리
function solution(numbers, target) {
  let ans = 0;

  const dfs = (numbers, index, acc) => {
    if (index === numbers.length && acc === target) {
      ans++;
      return;
    } else if (index == numbers.length && acc != target) return;

    dfs(numbers, index + 1, acc - numbers[index]);
    dfs(numbers, index + 1, acc + numbers[index]);
  };

  dfs(numbers, 0, 0);

  return ans;
}
