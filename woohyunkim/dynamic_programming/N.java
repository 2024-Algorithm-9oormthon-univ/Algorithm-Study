class N{
    int answer=0;
    public int solution(int N, int number) {
        answer=-1;
        DFS(N,number,0,0);
        return answer;
    }
    
    public void DFS(int N,int number,int sum,int cnt){
        if(cnt8){
            return;
        }
        
        if(sum==number){
            if(answer==-1  cnt  answer){
                answer=cnt;
            return;
            }
            
        }
        
        int tmp=0;n nn nnn저장해야되므로
        for(int i=1; i9; i++){
            tmp=tmp10+N;N NN NNN ...
            DFS(N,number,sum+tmp,cnt+i);
            DFS(N,number,sum-tmp,cnt+i);
            DFS(N,number,sumtmp,cnt+i);
            DFS(N,number,sumtmp,cnt+i);
        }
        
    }
}