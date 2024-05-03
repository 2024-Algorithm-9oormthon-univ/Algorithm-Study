import java.util.Arrays;
class H_Index{
    public int solution(int[] citations) {
        int answer = 0;
        Arrays.sort(citations);
        for(int i=0; i<citations.length; i++){
           if(citations[i]==(citations.length-i)){
               return citations.length-i;
           }
        }
        return answer;
    }
}