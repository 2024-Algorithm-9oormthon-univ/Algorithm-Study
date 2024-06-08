function isPrime (num) {
  if (num < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}

function getPermutations(nums_array) {
  if (nums_array.length === 1) return [nums_array];
  const nums = [];
  nums_array.forEach((fixed, index, original) => {
    const rest = [...original.slice(0, index), ...original.slice(index+1)];
    const permutations = getPermutations(rest);
    
    permutations.forEach((permutation) => {
      nums.push([fixed, ...permutation])
    })
  })
  return nums;
}

function solution(numbers) {
    const cases = getPermutations(numbers.split(''));
    const set_cases = new Set();
    let count = 0;
  
    cases.forEach((num_case) => {
      for (let i = 1; i <= num_case.length; i++) {
        const num = +(num_case.slice(0, i).join(''));
        set_cases.add(num)
      }
    })
  
    set_cases.forEach((num) => {
      if (isPrime(num)) count++;
    })
    return count;
}

console.log(isPrime(5))
console.log(solution("17"));
console.log(solution("011"));
