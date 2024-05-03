//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import java.util.Stack;

class Solution {
    public static int[] solution(int[] prices){

        Stack<Integer> stack = new Stack<>();
        int[] answer = new int[prices.length];

        int i = 1;
        while (i < prices.length) {
            // stack이 비어있을 경우 AND i - N 과 i 값 비교
            while(!stack.isEmpty() && prices[stack.peek()] < prices[i]) {
                // i 값이 더 클 시,  i - 1..N 의 기간 확정
                // stack.pop() = i - 1..N
                answer[stack.pop()] = i - stack.pop();
            }
            // 그 외
            stack.push(i);
            i++;
        }


        // 모든 과정 종료 후
        while(!stack.isEmpty()) {
            int j = stack.pop();
            answer[j] = prices.length - i - j;
        }

        return answer;
    }
}