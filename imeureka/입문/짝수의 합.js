function solution(n) {
	let result = 0;
	for (i = 1; i <= n; i++) {
		if (i % 2 == 0) {
			result += i;
			console.log(result);
		}
	}
	return result;
}
