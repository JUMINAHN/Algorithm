function solution(s) {
    let n = s.length
    if(n % 2 === 0) {
        //짝수
        return s.slice((n/2)-1, (n/2)+1)
    } else {  
        //홀수
        //문자열이라서 s[n/2]가 안됨 배열로 생각
        return s.slice((n/2), (n/2)+1)
    }
}