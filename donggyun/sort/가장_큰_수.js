// 모든 배열의 요소가 0인 경우 0 반환
// 아닌 경우, sort를 이용하여 정렬
function solution(numbers) {
  return +numbers.join("") === 0
    ? "0"
    : numbers
        .map((v) => v.toString())
        .sort((a, b) => +(b + a) - +(a + b))
        .join("");
}

console.log(solution([6, 10, 2]));
