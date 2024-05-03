function solution(priorities, location) {
  var queue = priorities.map((priority, index) => ({
    index: index,
    priority: priority,
  }));

  var answer = 0;

  while (true) {
    var current = queue.shift();
    // 현재 프로세스보다 우선순위가 높은 프로세스가 있는지 확인
    // 우선순위 더 높은 프로세스 o -> 현재 프로세스를 queue의 맨 뒤로 옮김
    if (queue.some((process) => process.priority > current.priority)) {
      queue.push(current);
    } else {
      // 우선순위 더 높은 프로세스 x -> 현재 프로세스를 실행
      answer++;
      if (current.index === location) {
        return answer;
      }
    }
  }
}
