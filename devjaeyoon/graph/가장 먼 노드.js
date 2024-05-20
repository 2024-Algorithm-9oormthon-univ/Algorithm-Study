function solution(n, edge) {
  const edgeMap = new Map();

  edge.forEach((value) => {
    edgeMap.set(
      value[0],
      edgeMap.get(value[0]) ? [...edgeMap.get(value[0]), value[1]] : [value[1]],
    );
    edgeMap.set(
      value[1],
      edgeMap.get(value[1]) ? [...edgeMap.get(value[1]), value[0]] : [value[0]],
    );
  });

  const queue = [[1, 0]];
  const visited = [];
  let maxDistance = 0;
  let count = 0;

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (maxDistance < distance) {
      maxDistance = distance;
      count = 1;
    } else if (maxDistance === distance) {
      count++;
    }

    visited[node] = true;

    for (let nextNode of edgeMap.get(node)) {
      if (visited[nextNode] !== true) {
        visited[nextNode] = true;
        queue.push([nextNode, distance + 1]);
      }
    }
  }

  return count;
}
