const find = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(numbers) {
  let visited = new Array(numbers.length).fill(0);
  let answer = [];

  const dfs = (result) => {
    if (result != "" && find(parseInt(result))) {
      answer.push(parseInt(result));
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        dfs(result + numbers[i]);
        visited[i] = 0;
      }
    }
  };
  dfs("");
  return new Set(answer).size;
}

console.log(solution("17"));
