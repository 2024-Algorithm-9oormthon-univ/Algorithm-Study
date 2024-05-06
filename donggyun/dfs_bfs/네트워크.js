const dfs = (graph, v, visited) => {
  visited[v] = true;

  for (let i = 0; i < graph[v].length; i++) {
    if (graph[v][i] === 1 && !visited[i]) dfs(graph, i, visited);
  }
};

// visited 배열을 false로 초기값 설정
// visited의 값이 false인 값만 순환하면서 answer 증가시킴
// dfs가 실행될 때마다 연결된 노드들은 visited가 true로 변하므로
// 고립된 네트워크 개수 확인 가능
function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);

  visited.map((v, i) => {
    if (v === false) {
      answer++;
      dfs(computers, i, visited);
    }
  });

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
