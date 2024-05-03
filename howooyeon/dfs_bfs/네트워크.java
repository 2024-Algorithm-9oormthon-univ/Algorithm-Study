class Solution {
  public int solution(int n, int[][] computers) {
      boolean[] visited = new boolean[n];
      int count = 0;
      
      for (int i = 0; i < n; i++) {
          if (!visited[i]) {
              dfs(i, computers, visited);
              count++;
          }
      }
      
      return count;
  }
  
  private void dfs(int node, int[][] computers, boolean[] visited) {
      visited[node] = true;
      for (int i = 0; i < computers.length; i++) {
          if (computers[node][i] == 1 && !visited[i]) {
              dfs(i, computers, visited);
          }
      }
  }
}
