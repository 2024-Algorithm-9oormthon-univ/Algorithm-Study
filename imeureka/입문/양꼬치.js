function solution(n, k) {
	let answer = 0;
	if (n >= 10) {
		k -= Math.floor(n / 10);
	}
	answer = n * 12000 + k * 2000;
	return answer;
}
