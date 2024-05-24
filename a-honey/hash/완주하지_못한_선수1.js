function solution(participant, completion) {
    let fail_completion = [];
  
    for (let i = 0; i < participant.length; i++) {
      let currentPerson = participant[i];
      let currentPersonIndexInParticipant = completion.indexOf(currentPerson);
      
       if (!completion.includes(currentPerson)){
        fail_completion.push(currentPerson); 
      }
      
      if (currentPersonIndexInParticipant !== -1) {
          completion.splice( currentPersonIndexInParticipant, 1);
      }
    }
    return fail_completion[0];
}

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))
