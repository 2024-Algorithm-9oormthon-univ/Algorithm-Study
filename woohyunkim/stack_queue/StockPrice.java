class StockPrice{
    public int[] solution(int[] prices) {
        int a=prices.length;
        int[] answer = new int[a];
        for(int i=0; i<prices.length; i++){
            int stack=0;
            for(int j=i; j<prices.length; j++){
                    if(prices[i]>prices[j]){//가격 떡락 시점
                        answer[i]=j-i;
                        break;
                    }
                else{
                    answer[i]=prices.length-i-1;
                }
            }
            
        }
        return answer;
    }
}