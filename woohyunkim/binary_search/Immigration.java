import java.util.Arrays;

class Immigration{
    public long solution(int n, int[] times) {
        //내 생각에는 times가 각 인덱스마다 배열이 있다면?
        Arrays.sort(times);
        long lastNum=(long)times[times.length-1]*n;
        long firstNum=times[0];
        long answer=0;
        long mid=0;
        long sum;
         while(firstNum<=lastNum){
            sum=0;
            mid=firstNum+(lastNum-firstNum)/2;
            for(int time:times){
                sum+=mid/time;
            }
            if(sum>=n){
                lastNum=mid-1;
                answer=mid;
            }
            else{
                firstNum=mid+1;
            }
          
        } 
        
        return answer;
    }
    
   
}