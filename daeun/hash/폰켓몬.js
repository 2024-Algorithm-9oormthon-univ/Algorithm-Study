function solution(nums) {
    var answer = 0;
    let select = [];
   
    // 설정한 폰켓몬 종류의 수가 N/2에 도달하면 answer 반환
    for(let i=0; i<nums.length; i++) {
        if(select.length == nums.length/2) {
            return answer;
        }
       
        // 선택한 폰켓몬 종류의 수가 N/2보다 작고, select 배열에 현재 폰켓몬 종류가 포함되어 있지 않다면 nums 배열에 추가
        if(select.length <= nums.length/2 && select.indexOf(nums[i]) === -1) {
            select.push(nums[i]);
            answer++;
        }
    }
   
    return answer;
}