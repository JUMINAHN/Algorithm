function solution(ineq, eq, n, m) {
    //!의 역할이 모호함
    //n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return
    if (ineq === "<") {
        //그런데 만약 여기서 eq를 받는다면? => 보니까 !은 그냥 <=이 아닌 것들
        if (eq === "=") {
            if (n <= m) {
            return 1 //맞으면
        } else {
            return 0
            }   
        }
        
        //즉 n < m
        if (n < m) {
            return 1 //맞으면
        } else {
            return 0
        }   
    } else {
        //ineq === >
        if (eq === "=") {
        if (n >= m) {
            return 1 //맞으면
        } else {
            return 0
            }   
        }
        if (n > m) {
            return 1 //맞으면
        } else {
            return 0
        } 
    }
}