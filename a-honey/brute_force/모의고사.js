function solution(answers) {
  const students_answers = [
    [1,2,3,4,5],
    [2,1,2,3,2,4,2,5],
    [3,3,1,1,2,2,4,4,5,5]
  ]
  
  const student_answer_count = [0, 0, 0];
  
  answers.forEach((answer, answer_index) => {
    students_answers.forEach((student_answers, student_index) => {
      if (answer === student_answers[answer_index % student_answers.length]) {
        student_answer_count[student_index]++;
      }
    })
  })
  
  const max_count = Math.max(...student_answer_count);
  const result = [];
  
  student_answer_count.forEach((count, student_index) => {
    if (count === max_count) {
      result.push(student_index + 1);
    }
  })
  
  return result.sort();
}

console.log(solution([1,2,3,4,5]))
console.log(solution([1,3,2,4,2]))
