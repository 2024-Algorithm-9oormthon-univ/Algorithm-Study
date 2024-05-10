class Solution {
  public int solution(int m, int n, int[][] puddles) {
      int[][] dp = new int[n + 1][m + 1];
      
      dp[1][1] = 1; 

      // 물 웅덩이가 있는 곳을 -1로 표시
      for (int[] puddle : puddles) {
          dp[puddle[1]][puddle[0]] = -1; // 주어진 puddles 배열은 [x, y] 형태
      }

      // dp 배열 채우기
      for (int i = 1; i <= n; i++) {
          for (int j = 1; j <= m; j++) {
              if (i != 1 || j != 1) {
                  if (dp[i][j] != -1) {
                      // 윗 칸에서 오는 경우의 수
                      int fromTop = dp[i - 1][j] == -1 ? 0 : dp[i - 1][j];
                      // 왼쪽 칸에서 오는 경우의 수
                      int fromLeft = dp[i][j - 1] == -1 ? 0 : dp[i][j - 1];
                      // 현재 위치의 경로 수는 이 두 경우의 수를 합한 것
                      dp[i][j] = (fromTop + fromLeft) % 1000000007;
                  }
              }
          }
      }
      return dp[n][m];
  }
}
