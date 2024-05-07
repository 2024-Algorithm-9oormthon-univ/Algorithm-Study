function solution(citations) {
	let answer = 0;
	citations.sort((a, b) => a - b);

	for (let i = 0; i < citations.length; i++) {
		let h = citations.length - i; // 남은 논문 수
		if (citations[i] >= h) {
			answer = h;
			break;
		}
	}

	return answer;
}
