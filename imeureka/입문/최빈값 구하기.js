/**
 * 1. reduce 복습 : 
 *    numbers.reduce(function(accumulator, currentValue){
 *    return accumulator + currentValue;}, 0);
 * 2. 객체 {}는 키-값 쌍을 효율적으로 저장할 수 있으므로, 
 *    각 요소의 빈도수를 키로 접근하여 저장
 * 
 */
const solution = (array) => {
	const counter = array.reduce(
		(acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
		{}
	);
	console.log(counter); // 출력: { '1': 1, '2': 2, '3': 3 }

	const items = Object.keys(counter)
		.map((key) => [Number(key), counter[key]])
		.sort((a, b) => b[1] - a[1]);
	console.log(keys); // 출력: ['1', '2', '3']
  
	if (items[0][1] === items?.[1]?.[1]) {
		return -1;
	}

	return items[0][0];
};

function solution(array) {
	let answer = 0;
	let res = new Array(1000);
	res.fill(0);

	for (let i = 0; i < array.length; i++) {
		res[array[i]] += 1;
	}

	let max = Math.max(...res);
	let count = 0;
	for (let i = 0; i < res.length; i++) {
		if (max === res[i]) {
			answer = i;
			count++;
		}
		if (count >= 2) return -1;
	}
	return answer;
}