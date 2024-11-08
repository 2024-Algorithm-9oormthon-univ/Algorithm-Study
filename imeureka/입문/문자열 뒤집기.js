/**
 * 1. 문자열 뒤집을 때 필요한 메소드 :
 *    reverse() , split(), join()
 * 2. 스프레드 연산자는 spilt()메소드를 대체할 수 있다.
 *    split은 문자열을 쪼개 배열로 만든다.
 *    스프레드는 배열 또는 문자열을 개별 요소로 펼친다.
 */

function reverseString(str) {
	let splitString = str.split("");
	// ["H","I"]
	let reverseArray = splitString.reverse();
	let joinArray = reversArray.join("");
	return joinArray;
}

function solution(my_string) {
	let answer = [...my_string].reverse().join("");
	return answer;
}

/**
 * 복습
 */

function solution(my_string) {
	let reverseString = [...my_string].reverse().join();
	return reverseString;
}
