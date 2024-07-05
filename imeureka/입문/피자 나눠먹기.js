/**
 * 1. Math.ceil :항상 반올림하여 주어진 숫자보다 크거나 같은 가장 작은 정수를 반환
 *    그렇기에 내가 if문 남발한 코드도 answer = Math.ceil(n/7); 로.. 할 수 있다.
 * 2. 삼항연산자 : 아직 삼항연산자 사용이 미숙한 거 같다. 연습하자
 *    return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
 * 3. parseInt vs Math.floor 차이?
 *    parseInt 메서드는 소수점을 버리기 때문에 음수 마이너스일 때 차이남
 * 4. 최대공약수 : let GCD = (num1, num2) => (num2>0?GCD(num2, num1%num2) : num1);
 * 5. 최소공배수 : let LCM = (num1*num2) / GCD
 */   

//피자 나눠먹기 1
function solution(n) {
	let answer = 0;
	if (n % 7 !== 0) {
		answer = Math.floor(n / 7) + 1;
	} else if (n / 7 == 0) {
		answer = 1;
	} else {
		answer = Math.floor(n / 7);
	}

	return answer;
}

//피자 나눠먹기 2
function solution(n) {
	let pizza = 1;
	while ((pizza * 6) % n) {
		pizza++;
	}
	return pizza;
}

//피자 나눠먹기 3
function solution(slice, n) {
	return Math.ceil(n / slice);
}