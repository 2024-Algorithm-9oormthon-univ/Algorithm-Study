
import java.util.PriorityQueue;

public class Solution {
    public int solution(int[] priorities, int location){
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for(int n : priorities) pq.offer(n);
        int result = 0;
        while(!pq.isEmpty()){
            for(int i = 0; i < priorities.length; ++i){
                if(pq.peek() == priorities[i]){ // 위치 탐색
                    pq.poll();
                    ++result;
                    // 위치와 목표 일치 시 반환
                    if(location == i){
                        return result;
                    }
                }
            }
        }
       return result;
    }
}
