function solution(n, edge) {
	/**
	 * 1. 인접 리스트 생성
	 */
	let adjList = new Map();
	for (let e of edge) {
		if (!adjList.has(e[0])) {
			adjList.set(e[0], [e[1]]);
		} else {
			adjList.get(e[0]).push(e[1]);
		}

		if (!adjList.has(e[1])) {
			adjList.set(e[1], [e[0]]);
		} else {
			adjList.get(e[1]).push(e[0]);
		}
	}

	/**
	 * 2. 다익스트라 알고리즘을 사용하여 최단 거리 찾기
	 */
	function dijkstra(n, adjList) {
		const max = 200000;
		// 0번부터 하면 헷갈려서 +1씩 (1번 노드부터 시작)
		let distance = Array(n + 1).fill(max);
		let visited = Array(n + 1).fill(false);

		// 0번은 안쓰고 1번은 자신이므로 0으로
		distance[0] = 0;
		distance[1] = 0;

		while (true) {
			// 방문하지 않은 노드 중에서 최소 거리를 가진 노드를 선택
			let minDistance = max;
			let minNode = -1;

			for (let node = 1; node <= n; node++) {
				if (!visited[node] && distance[node] < minDistance) {
					minDistance = distance[node];
					minNode = node;
				}
			}
			if (minNode === -1) {
				break;
			}

			visited[minNode] = true;

			// 이웃 노드까지의 거리가 현재 노드를 거쳐서 가는 거리보다 작으면 업데이트
			let neighbors = adjList.get(minNode) || [];
			for (let neighbor of neighbors) {
				if (!visited[neighbor] && distance[minNode] + 1 < distance[neighbor]) {
					distance[neighbor] = distance[minNode] + 1;
				}
			}
		}

		return distance;
	}

	/**
	 * 3. 최단 거리 결과 처리
	 */
	const distances = dijkstra(n, adjList);
	const maxValue = Math.max(...distances);
	const maxCount = distances.filter((value) => value === maxValue).length;

	return maxCount;
}
