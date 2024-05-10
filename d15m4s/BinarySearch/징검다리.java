public class Solution {
    public int solution(int distance, int[] rocks, int removable) {
        int start = 1;
        int end = distance;

        Arrays.sort(rocks);
        int[] sortedRocks = Arrays.copyOf(rocks, rocks.length + 1);
        sortedRocks[rocks.length] = distance;

        int answer = 0;

        while (start <= end) {
            int mid = (start + end) / 2;
            int removed = 0;
            int prevRock = 0;
            for (int rock : sortedRocks) {
                int dist = rock - prevRock;
                if (dist < mid) {
                    removed++;
                    if (removed > removable) {
                        break;
                    }
                } else {
                    prevRock = rock;
                }
            }
            if (removed > removable) {
                end = mid - 1;
            } else {
                answer = mid;
                start = mid + 1;
            }
        }
        return answer;
    }
}