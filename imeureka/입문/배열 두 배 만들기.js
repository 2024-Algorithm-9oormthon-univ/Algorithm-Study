/**
 * 1. reduce 사용
 * 2. reduce 함수는 배열의 요소를 순차적으로 순회하며 
 *    숫자든 배열이든 객체든 하나의 값으로 줄여 return 하는 함수다
 * 3. map 사용
 * 4. const solution = (numbers) => return numbers.map((number) => number * 2)
 */
function solution(numbers) {
	let answer = [];
	for (i = 0; i < numbers.length; i++) {
		answer[i] = numbers[i] * 2;
	}
	return answer;
}
