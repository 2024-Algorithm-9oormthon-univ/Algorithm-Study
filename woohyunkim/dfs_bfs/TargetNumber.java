class TargetNumber{
    int answer = 0;
    public int solution(int[] numbers, int target) {//배열을 가지고 dfs를?
        dfs(0,numbers,target,0);
        return answer;
    }
    public void dfs(int depth,int [] numbers,int target,int sum){
        if(depth==numbers.length){//마지막 깊이에 있는 노드까지 탐색을 완료했을떄
            if(sum==target){ //값이 내가 원하는 target과 같다면(계산결과)
                answer++;
            }
        }
        else{//배열을 거꾸로 뒤집어서 이진트리의 깊이와 배열의 인덱스값을 매칭시키면된다.
            dfs(depth+1,numbers,target,sum+numbers[depth]);
            dfs(depth+1,numbers,target,sum-numbers[depth]);
        }
    }
}