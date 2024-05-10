public class Solution {
    public long solution(int n, int[] times) {


        long left = 1;
        long right = getMax(times) * n;

        long answer = 0;

        // 이분탐색이니 left가 right 이하인 동안
        while (left <= right) {
            // 가운데 : 더하고 2로 나눈 몫(정수)
            long mid = (left + right) / 2;
            // 심사한 사람 수
            long people = 0;

            for (int time : times) {
                // 해당 심사대에서 주어진 시간동안 심사 받은 수 더하기
                people += mid / time;

                // 중간에라도 이미 n명보다 많이 심사했다면 break
                if (people >= n) {
                    break;
                }
            }
            // n명 초과 심사했다면, 시간이 너무 많은 것
            // 딱 n명 심사했더라도, 시간이 남을 가능성 있음
            if (people >= n) {
                answer = mid;
                right = mid - 1;
            }
            // n명 미만 심사했다면, 시간이 너무 부족하다
            else {
                left = mid + 1;
            }
        }
        return answer;
    }

    // 배열에서 최댓값 구하기
    private int getMax(int[] arr) {
        int max = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
}
