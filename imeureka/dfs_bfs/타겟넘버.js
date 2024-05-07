function solution(numbers, target) {
	let answer = 0;
	function dfs(depth, total) {
		if (depth === numbers.length) {
			if (total === target) {
				answer += 1;
			}
			return;
		}
		dfs(depth + 1, total + numbers[depth]);
		dfs(depth + 1, total - numbers[depth]);
	}
	dfs(0, 0);
	return answer;
}
