
function solution(my_string, n) {
	let answer = "";
	let splitString = my_string.split("");

	for (let i = 0; i < splitString.length; i++) {
		let newString = splitString[i].repeat(n);
		answer += newString;
		console.log(newString);
	}
	return answer;
}
