/**
 * 1. 평균은 다 더한 값의 배열의 길이로 나눈 값
 * 2. reduce  리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환!! 
 *    결과가 하나의 수를 의미하면 reduce 고려
 * 3. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생
 * 4. numbers.reduce(function(accumulator, currentValue){
 *    return accumulator + currentValue;}, 0);
 */
function solution(numbers) {
	let total = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
	let answer = total / numbers.length;
	return answer;
}
