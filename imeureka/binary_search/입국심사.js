function solution(n, times) {
	times.sort((a, b) => a - b); 

	let low = 1;
	let high = n * times[times.length - 1];
	let answer = high; 

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		let sum = 0;

		for (let i = 0; i < times.length; i++) {
			sum += Math.floor(mid / times[i]);
		}

		if (sum >= n) {
			answer = mid; 
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return answer;
}

const n = 6;
const times = [7, 10];

console.log(solution(n, times)); // 예상 결과: 28
