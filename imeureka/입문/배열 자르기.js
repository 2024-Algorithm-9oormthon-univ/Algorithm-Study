/**
 * 1. sliece 메소드
 * splice 함수는 첫 번째 인자로 시작 인덱스를 받고, 
 * 두 번째 인자로는 몇 개를 삭제할 건지를 받습니다. 
 * 그냥 (num1, num2)를 하게 되면 
 * num1번째 인덱스부터 시작해서 num2"개"를 제거합니다.
 * 그렇기에 num2 + 1을 해줘야됩니다
 */
function solution(numbers, num1, num2) {
	return numbers.slice(num1, num2 + 1);
}
