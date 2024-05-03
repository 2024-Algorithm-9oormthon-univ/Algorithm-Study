function solution(clothes) {
	const map = new Map();
	let answer = 1;
	let typeNum = 1;
	for (const [name, type] of clothes) {
		if (map.get(type)) {
			map.set(type, map.get(type) + 1);
		} else {
			map.set(type, typeNum);
		}
	}

	for (const key in clothesMap) {
		answer *= clothesMap[key] + 1;
	}
	return answer - 1;
}
