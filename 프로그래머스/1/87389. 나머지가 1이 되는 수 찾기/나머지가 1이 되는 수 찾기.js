function solution(n) {
    //나머지가 1이 되도록 하는 => 그니까 n % x === 1인 것을 찾아야함
    //n % x = 1 
    //루프 다 돌아봐야하나 ?
    for (let i=1;i<n;i++){
        if (n%i === 1) return i
    }
    
    
//     var answer = 0;
//     return answer;
}