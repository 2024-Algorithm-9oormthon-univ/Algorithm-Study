function solution(operations) {
	let answer = [];

	operations.forEach(function (e) {
		let num = 0;
		if (e.startsWith("I")) {
			answer.push(parseInt(e.split(" ")[1]));
		} else if (e.startsWith("D -")) {
			num = Math.min(...answer);
			console.log(num);
			answer.splice(answer.indexOf(num), 1);
		} else {
			num = Math.max(...answer);
			answer.splice(answer.indexOf(num), 1);
		}
	});

	if (answer.length === 0) {
		return [0, 0];
	}
	return [Math.max(...answer), Math.min(...answer)];
}
