/**
 * 1. array.push() 
 *    배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
 *    Array.prototype.push.apply(a, b); -> a b 배열을 a 배열에 합치는 
 */
function solution(n) {
	let answer = [];

	for (let i = 1; i <= n; i++) {
		if (i % 2 === 1) {
			answer.push(i);
		}
	}

	return answer;
}
