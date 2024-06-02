function solution(arr)
{
    let answer = [];
   
    for(let i=0; i<arr.length; i++){
        //현재 요소가 이전 요소와 다르면 추가
        if(arr[i] !== arr[i-1])
            answer.push(arr[i]);
    }
   
    return answer;
}