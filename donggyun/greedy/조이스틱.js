function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수
    while (idx < name.length && name[idx] === "A") {
      idx++;
    }

    min_move = Math.min(
      min_move, // 순차적으로 이동
      i * 2 + name.length - idx, // 오른쪽으로 갔다가 다시 돌아서 가는 경우
      i + 2 * (name.length - idx) // 왼쪽으로 갔다가 다시 돌아오는 경우
    );
  });

  return answer + min_move;
}
