function solution(arr)
{
    var answer = [];
    
    for(const num of arr){
        if(answer[answer.length-1] === num) continue;
        answer.push(num);
    }
    
    return answer;
}