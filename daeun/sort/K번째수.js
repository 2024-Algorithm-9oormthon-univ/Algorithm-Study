function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let list = array.slice(commands[i][0] - 1, commands[i][1]);
    list.sort((a, b) => a - b);

    answer.push(list[commands[i][2] - 1]); //정렬된 list에서 k번째 값을 answer 배열에 추가
  }

  return answer;
}
