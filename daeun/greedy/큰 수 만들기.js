function solution(number, k) {
    const stack = [];
    
    for (let num of number) {
        //스택의 마지막 숫자보다 현재 숫자가 크면 제거
        while (stack.length > 0 && stack[stack.length - 1] < num && k > 0) {
            stack.pop();
            k -= 1;
        }
        
        stack.push(num);
    }
    
    //숫자가 오름차순 정렬일 때 마지막 숫자 제거
    while (k > 0) {
        stack.pop();
        k -= 1;
    }
    
    return stack.join('');
}