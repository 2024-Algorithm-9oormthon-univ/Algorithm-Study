function solution(my_string, letter) {
	let ans = [];

	for (let i = 0; i < my_string.length; i++) {
		let str = my_string[i];

		if (str === letter) {
			continue;
		} else {
			ans.push(str);
		}
	}

	return ans.join("");
}
