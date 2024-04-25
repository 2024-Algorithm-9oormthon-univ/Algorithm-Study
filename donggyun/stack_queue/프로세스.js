function solution(priorities, location) {
  const stack = [];
  const answer = [];

  const queue = priorities.map((v, i) => {
    stack.push(v);
    return { index: i, priority: v };
  });

  stack.sort((a, b) => b - a);

  while (queue.length !== 0) {
    // front pop
    const front = queue.shift();

    // front의 우선순위가 제일 높은지 판별
    if (front.priority === stack[0]) {
      // 맞으면 answer에 넣고, 찾고자 했던 값이었으면 answer의 길이 반환
      answer.push(front);
      stack.shift();
      if (front.index === location) return answer.length;
    } else {
      // 아니면 다시 queue에 삽입
      queue.push(front);
    }
  }
  return queue;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
