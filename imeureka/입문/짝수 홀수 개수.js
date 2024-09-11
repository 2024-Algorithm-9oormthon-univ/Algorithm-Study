function solution(num_list) {
	const obj = { even: 0, odd: 0 };

	for (let i = 0; i < num_list.length; i++) {
		if (num_list[i] % 2 === 1) {
			obj["odd"] += 1;
		} else {
			obj["even"] += 1;
		}
	}

	return [obj["even"], obj["odd"]];
}
