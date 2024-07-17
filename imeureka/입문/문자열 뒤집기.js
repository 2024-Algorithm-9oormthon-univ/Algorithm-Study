/**
 * 1. 문자열 뒤집을 때 필요한 메소드 :
 *    reverse() , split(), join()
 * 2. 스프레드 연산자는 spilt()메소드를 대체할 수 있다.
 */
function reverseString(str) {
	let splitString = str.split("");
	// ["H","I"]
	let reverseArray = splitString.reverse();
	let joinArray = reversArray.join("");
}
// 인줄 알았으나 실패
function solution(my_string) {
	let answer = [...my_string].reverse().join("");
	return answer;
}
