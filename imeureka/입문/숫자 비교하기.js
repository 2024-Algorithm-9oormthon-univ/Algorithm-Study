/** 
 * 1. 삼항연산자 적극활용하자
 * let answer = num1 === num2 ? 1 : -1;
*/
function solution(num1, num2) {
	var answer = 0;
	if (num1 === num2) {
		answer = 1;
	} else {
		answer = -1;
	}

	return answer;
}
