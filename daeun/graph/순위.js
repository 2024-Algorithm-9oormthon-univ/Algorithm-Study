function solution(n, results) {
    // 각 선수의 이긴 기록과 진 기록을 저장할 그래프
    const winGraph = Array.from({ length: n + 1 }, () => []);
    const loseGraph = Array.from({ length: n + 1 }, () => []);

    // 결과를 기반으로 그래프를 채움
    results.forEach(([winner, loser]) => {
        winGraph[winner].push(loser);   // winner가 loser를 이겼으므로, winGraph[winner]에 loser 추가
        loseGraph[loser].push(winner);   // loser가 winner에게 졌으므로, loseGraph[loser]에 winner 추가
    });

    // 특정 선수가 그래프에서 이긴 선수 혹은 진 선수를 찾기 위해 BFS 수행
    function bfs(start, graph) {
        const visited = Array(n + 1).fill(false); // 방문 기록을 저장할 배열
        const queue = [start]; // BFS를 위한 큐
        visited[start] = true; 
        let count = 0;

        while (queue.length) {
            const current = queue.shift();
            for (const next of graph[current]) { 
                if (!visited[next]) { // 현재 노드에 연결된 모든 노드에 대해 아직 방문하지 않았다면 방문으로 표시
                    visited[next] = true; 
                    queue.push(next); 
                    count++;
                }
            }
        }
        return count; 
    }

    let count = 0; // 순위를 정확히 매길 수 있는 선수의 수

    for (let i = 1; i <= n; i++) {
        const winCount = bfs(i, winGraph); 
        const loseCount = bfs(i, loseGraph); 

        // i번 선수가 이긴 선수와 진 선수의 합이 n-1이라면 순위를 정확히 매길 수 있는 선수로 카운트 증가
        if (winCount + loseCount === n - 1) {
            count++;
        }
    }

    return count;
}