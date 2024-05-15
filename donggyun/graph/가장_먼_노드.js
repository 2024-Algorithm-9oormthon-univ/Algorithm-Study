class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
}

const BFS = (graph, startNode) => {
  let visited = [];
  let needVisit = [];
  let level = { 1: 0 };
  let levelCount = { 0: 1 };

  needVisit.push(parseInt(startNode));

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    visited.push(node);

    graph[node].forEach((neighbor) => {
      if (!visited.includes(neighbor) && !needVisit.includes(neighbor)) {
        needVisit.push(neighbor);
        const nodeLevel = level[node] + 1;
        level[neighbor] = nodeLevel;
        levelCount[nodeLevel] = (levelCount[nodeLevel] || 0) + 1;
      }
    });
  }

  return levelCount;
};

function solution(n, edge) {
  const graph = new Graph();
  new Array(n).fill(0).map((v, i) => graph.addNode(i + 1));

  edge.map((v) => {
    graph.addEdge(v[0], v[1]);
  });

  const levelCount = BFS(graph.nodes, "1");
  const maxDepth = Math.max(...Object.keys(levelCount).map(Number));
  return levelCount[maxDepth];
}
