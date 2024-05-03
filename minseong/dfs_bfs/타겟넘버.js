function solution(numbers, target) {
  function dfs(index, sum) {
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }
    return (
      dfs(index + 1, sum + numbers[index]) +
      dfs(index + 1, sum - numbers[index])
    );
  }
  return dfs(0, 0);
}
