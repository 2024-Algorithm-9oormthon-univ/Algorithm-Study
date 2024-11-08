/**
 * 짝수 홀수 개수 구하는 법
 * [1, 2, 3, 4, 5]
 * 반복문을 통해 arr[i]가 짝수인지
 * 짝수면 i ++
 * 홀수면 j ++
 *
 *
 */

function solution(num_list) {
	let oddCount = 0; // 홀수 개수
	let evenCount = 0; // 짝수 개수

	for (let num = 0; num < num_list.length; num++) {
		if (num_list[num] % 2 === 0) {
			evenCount++;
			console.log(num_list[num], "짝수");
		} else {
			oddCount++;
			console.log(num_list[num], "홀수");
		}
	}

	let answer = [evenCount, oddCount];
	return answer;
}
