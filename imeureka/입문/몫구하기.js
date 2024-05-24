/** 
 * 1. JS 나누기 : parseInt, Math.floor
 * 큰 수에서는 type number에 string이 들어가는 경우도 있기 때문에, 
 * 소수점 이하를 절삭하여 정수 값을 return하려는 목적으로 
 * Math.floor 대신에 parseInt를 사용해서는 안 됩니다.
 * 
 * 2. num1을 num2로 나눈 몫 :
 * parseInt(num1 / num2)
 * Math.floor(num1 / num2)
*/

function solution(num1, num2) {
	return parseInt(num1 / num2);
}
