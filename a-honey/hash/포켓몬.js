function solution(nums) {
    let unique_poketmon_count = new Set(nums).size;
    let max_poketmon_count = nums.length / 2;
  
    if (unique_poketmon_count <= max_poketmon_count) {
      return unique_poketmon_count;
    }

    return max_poketmon_count;
}

console.log(solution([3,1,2,3]))
