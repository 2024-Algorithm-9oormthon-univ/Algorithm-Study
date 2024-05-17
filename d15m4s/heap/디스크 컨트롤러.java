import java.util.*;

class Solution {
    public int solution(int[][] jobs) {
        int answer = 0;
        int now = 0;
        int i = 0;
        int start = -1;
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> a[0] - b[0]);

        while (i < jobs.length) {
            for (int[] job : jobs) {
                if (start < job[0] && job[0] <= now) {
                    heap.add(new int[]{job[1], job[0]});
                }
            }

            if (!heap.isEmpty()) {
                int[] current = heap.poll();
                start = now;
                now += current[0];
                answer += now - current[1];
                i++;
            } else {
                now++;
            }
        }

        return answer / jobs.length;
    }
}