function solution(arr) {
    let answer_arr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i-1]) {
            answer_arr.push(arr[i])
        }
    }
    
    return answer_arr;
}
