/**
 * 1. 정렬 arr1.sort();
 * 2. 나누기 할 땐 항상 소수점 나올 수 있음을 생각하자
 * 3. 근데 이렇게 푸니까 정확도 100%는 아니더라.. 정렬 이렇게 하는게 아닌가 머쓱,,
 *    array.sort(); console 찍으면 오름차순으로 잘 정렬되길래 이렇게 사용하는 줄
 * 4. JS에서는 배열에 sort를 하면 정수형 원소도 문자열 기준으로 정렬됩니다.
 *    [1,200,3,40000,500].sort() => [1,200,3,40000,500] 대박~
 * 5. (a,b)=>a-b라는 comparator가 필요
 */
function compareNumbers(a, b) {
	return a - b;
}

function solution(array) {
	//array.sort();
	//array.sort((a, b) => a - b);
	array.sort(compareNumbers);
	let answer = Math.floor(array.length / 2);
	return array[answer];
}
