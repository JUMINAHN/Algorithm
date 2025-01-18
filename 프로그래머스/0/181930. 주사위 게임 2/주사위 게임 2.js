function solution(a, b, c) {
    //모두 다르다면 a + b = c
    //세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a+b+c) * (a2+b2+c2)점
    //일단 모든 조건이 같을 때
    if(a===b && b===c ) {
        return (3*a)*(3*a*a)*(3*a*a*a) //공통된 것 묶기
        // return (((a*a*a)+(b*b*b)+(c*c*c)) + ((a*a)+(b*b)+(c*c)) + (a+b+c))
        // return ((a+b+c) * (Math.pow(a)+ Math.pow(b) + Math.pow(c)) *
        //     (Math.pow(a)*a + Math.pow(b)*b + Math.pow(c)*c))
    } else if(a === b || b === c || a === c) { //먼저 성립되는 것 있으면 나갈 것
        // return ((a + b + c)*(Math.pow(a)+ Math.pow(b) + Math.pow(c))) //모두 같을 때
        return (a+b+c) * ((a*a)+(b*b)+(c*c))
    } else if(a !== b && b !== c && a !== c) {
        //모두 다르다면
        return (a+b+c)
    } 
}