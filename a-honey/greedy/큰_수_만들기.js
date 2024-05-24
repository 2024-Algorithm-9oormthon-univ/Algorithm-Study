function solution(number, k) {
  let stack = [];
  let removeCount = k;
  
  for (let i = 0; i < number.length; i++) {
    let currentNum = number[i];
    
    while (removeCount > 0 && stack.length > 0 && stack[stack.length - 1] < currentNum) {
      stack.pop();
      removeCount--;
    }
      
    stack.push(currentNum)
  }
  
  return stack.join('');
}

console.log(solution("1924", 2))
console.log(solution("1231234", 3));
