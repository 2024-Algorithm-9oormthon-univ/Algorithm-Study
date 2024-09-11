/**
 * 1. reverse 사용
 * 2. 처음엔 이중 for 문으로 돌려서 밖 조건문은 i=0부터 5까지
 *    안 조건문은 j=4부터 0까지
 *    생각해보니 answer[0] = arr[4] ... 이렇게 돌렸는데 틀렸다.
 * 3. for(let i=1;i<-j(배열의 길이); i++){
 *     answer.push(arr[j-1])
 *     }
 */
function solution(num_list) {
	return num_list.reverse();
}
