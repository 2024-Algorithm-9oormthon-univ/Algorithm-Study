function getDungeonsCases (dungeons) {
  if (dungeons.length === 1) return [dungeons];
   const explore_cases = [];
    dungeons.forEach((dungeon, index, array) => {
      const rest_dungeons = [...array.slice(0, index), ...array.slice(index+1)];
      const rest_permutations = getDungeonsCases(rest_dungeons);
      
      rest_permutations.forEach(permutation => {
        explore_cases.push([dungeon, ...permutation]);
      })
    })
    return explore_cases;
}

function solution(k, dungeons) {
    const explore_cases = getDungeonsCases(dungeons);
    let max_count = 0;
    
    explore_cases.forEach((explore_case) => {
      let current_stamina = k; 
      let count = 0;
      
      for (const [needStamina, deleteStamina] of explore_case) {
        if (current_stamina >= needStamina) {
          current_stamina -= deleteStamina;
          count++;
        } else {
          break; 
        }
      }
      
      max_count = Math.max(max_count, count)
    })
  
    return max_count;
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));
