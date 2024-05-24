function solution(people, limit) {
  let sortedPeopleArray = people.sort((a, b) => a - b);
  let theHeaviestPersonIndex = people.length - 1;
  let theLightestPersonIndex = 0;
  let count = 0;
  
  while (theHeaviestPersonIndex >= theLightestPersonIndex) {
    if (sortedPeopleArray[theHeaviestPersonIndex] + sortedPeopleArray[theLightestPersonIndex] <= limit) {
      theLightestPersonIndex++;
    }
    theHeaviestPersonIndex--;
    count++;    
  }
  
  return count;
}

console.log(solution([70, 50,80,50],100));
console.log(solution([70, 80, 50],100))
