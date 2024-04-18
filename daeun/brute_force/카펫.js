function solution(brown, yellow) {
  //가로 길이 = 전체 격자 수 / 세로 길이
  for (var y = 3; y <= (brown + yellow) / y; y++) {
    var x = Math.floor((brown + yellow) / y);
    //brown 격자 테두리 제외한 내부의 크기 = yello 격자 크기
    if ((x - 2) * (y - 2) === yellow) {
      break;
    }
  }

  return [x, y];
}
