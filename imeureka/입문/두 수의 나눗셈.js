/**
 * 1. ~~ (double tilde)
 * Math.floor와 같은 기능을 한다.
 * ~는 비트 연산의 not이고, 숫자에 ~ 연산을 하면 소수점이 버려진다.
 * ~~는 ~를 두 번 실행한 것으로, 숫자에 활용하면 원래 숫자에서 정수부분만 취할 수 있다.
 * 수행 속도는 ~~가 가장 빠르다고 한다.
 * ~~ > Math.floor() > parseInt
 * 
 * 2.Math.trunc
 * Math.trunc()는 소수점 이하는 다 버린다. 
 * ex) Math.trunc(23.3) = 23, Math.trunc(-23.3) = -23
 * Math.floor()는 소수점을 내림한다. 
 * ex) Math.floor(23.3) = 23, Math.floor(-23.3) = -24가 된다. 
 * 음수인 경우도 생각해서 소수점을 이하 수를 없애고 싶을때는 Math.trunc를 사용하는 것이 좋다.
 * 
 * 요약 : runc 는 소수점 버리기 floor 은 내림
 */
function solution(num1, num2) {
	let answer = ~~((num1 / num2) * 1000);
	return answer;
}
