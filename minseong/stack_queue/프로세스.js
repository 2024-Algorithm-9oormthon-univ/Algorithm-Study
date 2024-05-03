function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({ index, priority }));
  let order = 0;

  while (queue.length > 0) {
    let current = queue.shift(); // 큐에서 첫 번째 프로세스를 꺼냄
    if (queue.some((process) => process.priority > current.priority)) {
      // 우선순위가 더 높은 프로세스가 있다면
      queue.push(current); // 꺼낸 프로세스를 큐 뒤에 다시 추가
    } else {
      // 우선순위가 더 높은 프로세스가 없다면
      order++; // 실행 순서를 1 증가
      if (current.index === location) {
        // 꺼낸 프로세스가 찾고 있는 프로세스라면
        return order; // 현재 순서 반환
      }
    }
  }
}
