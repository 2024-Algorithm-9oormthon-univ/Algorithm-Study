const solution = (array, height) => {
	let answer = 0;
	answer = array.filter((tall) => tall > height);
	return answer.length;
};
