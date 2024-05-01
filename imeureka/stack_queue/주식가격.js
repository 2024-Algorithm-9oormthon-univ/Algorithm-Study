function solution(prices) {
	let answer = [0, 0, 0, 0, 0];
	for (i = 0; i < prices.length; i++) {
		for (j = i + 1; j < prices.length; j++) {
			answer[i]++;
			if (prices[i] > prices[j]) {
				break;
			}
		}
	}
	return answer;
}
