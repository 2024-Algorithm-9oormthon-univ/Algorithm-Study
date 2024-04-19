function solution(name) {
	let answer = 0;
	let minChange = name.length - 1;
	const A_SIZE = 65;
	const Z_SIZE = 91;

	for (let i = 0; i < name.length; i++) {
		let currentChar = name.charCodeAt(i);
		let nextIndex = i + 1;

		// 1.
		// 알파벳을 변경한 횟수
		answer += Math.min(currentChar - A_SIZE, Z_SIZE - currentChar);

		// 2.
		// 연속 A 이동 횟수
		while (nextIndex < name.length && name.charCodeAt(nextIndex) === A_SIZE) {
			nextIndex += 1;
		}

		// 3.
		// 인덱스 최소 이동 구하기
		minChange = Math.min(
			minChange,
			i * 2 + name.length - nextIndex, //뒤로 돌아가기
			i + (name.length - nextIndex) * 2
		);
	}

	answer += minChange;
	return answer;
}
