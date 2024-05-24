function solution(n, lost, reserve) {
  let shouldBorrowStudentArray = lost.filter(student => !reserve.includes(student));
  let couldLendStudentArray = reserve.filter(student => !lost.includes(student));
  let participateStudentCount = n - shouldBorrowStudentArray.length;
  
  shouldBorrowStudentArray.sort((a, b) => a - b);
  couldLendStudentArray.sort((a, b) => a - b);
  
  for (let i = 0; i < shouldBorrowStudentArray.length; i++) {
    let currentNum = shouldBorrowStudentArray[i];
    
    let couldLendStudentIndex = couldLendStudentArray.findIndex((num) => num === currentNum + 1 ||  num === currentNum - 1 );
    
    if (couldLendStudentIndex !== -1) {
      participateStudentCount++;
      couldLendStudentArray.splice(couldLendStudentIndex, 1)
    }
  }
    return participateStudentCount;
}

console.log(solution(5, [2, 4], [1,3,5]));
console.log(solution(5, [2, 4], [3]));
