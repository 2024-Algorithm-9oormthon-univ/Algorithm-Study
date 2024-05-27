function solution(participant, completion) {
  let participant_hash = {};
  
  for (let person of participant) {
    if (participant_hash[person]) {
      participant_hash[person]++;
    } else {
      participant_hash[person] = 1;
    }
  }
  
  for (let person of completion) {
    if (participant_hash[person]) {
      participant_hash[person]--;
    }
  }
  
  for (let person in participant_hash) {
    if (participant_hash[person] > 0) {
      return person
    }
  }
}

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))
