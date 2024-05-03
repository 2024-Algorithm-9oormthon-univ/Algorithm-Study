function solution(numbers) {
	// 1.
	// 중복을 허용하지 않는 set
	let primeNumArray = new Set();

	// 2.
	// 조합만드는 로직 : 순열 활용
	function getPermutation(arr, fixed) {
		for (let i = 0; i < arr.length; i++) {
			const nextIndex = fixed + arr[i];
			const current = [...arr];
			current.splice(i, 1);

			if (isPrimeNumber(parseInt(nextIndex))) {
				primeNumArray.add(parseInt(nextIndex));
				//set 추가
			}
			getPermutation(current, nextIndex);
		}
	}

	// 3.
	// 소수 확인 로직 - 에라토스테네스의 체 알고리즘 활용
	function isPrimeNumber(num) {
		if (num <= 1) {
			return false;
		}
		if (num % 2 === 0) {
			return num === 2 ? true : false;
		}
    
		const sqrt = parseInt(Math.sqrt(num));
		for (let divider = 3; divider <= sqrt; divider += 2) {
			if (num % divider === 0) {
				return false;
			}
		}
		return true;
	}

	getPermutation(numbers, "");
	return primeNumArray.size;
}
