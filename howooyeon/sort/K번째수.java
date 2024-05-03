import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        for(int i = 0; i < commands.length; i++){
            int s = commands[i][0] - 1;
            int e = commands[i][1];
            int k = commands[i][2] - 1;
            
            // Arrays.copyOfRange(원본 배열, 복사할 시작인덱스, 복사할 끝인덱스전까지)
            int[] temp = Arrays.copyOfRange(array, s, e);
            Arrays.sort(temp);
            answer[i] = temp[k];
        }
        return answer;
    }
}