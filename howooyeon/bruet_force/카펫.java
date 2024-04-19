class Solution {
  public int[] solution(int brown, int yellow) {
      int[] answer = new int[2];
      int y = 1;
      while(true){
          int x = brown/2 - y + 2;
              if(x * y - brown == yellow){
                  return new int[] {x, y};
              }
          y++;
      }
  }
}