import java.util.*; 

class Solution {
    public int solution(String[][] clothes) {
        Map<String, Integer> map = new HashMap<>();       
        int answer = 1;
        
        for(int i = 0; i < clothes.length; i++) {
            // map.getOrDefault(clothes[i][1], 0)은 map에서 clothes[i][1] 키에 해당하는 값을 반환. 만약 해당 키가 존재하지 않으면 기본값 0을 반환
            map.put(clothes[i][1], map.getOrDefault(clothes[i][1], 0) + 1); 
        }
        
        for(String key : map.keySet()) {
            answer = answer * (map.get(key) + 1);  
        }
        
        answer -= 1;
        
        return answer;
    }
}