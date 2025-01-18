function solution(code) {
    // 시작할 때 mode는 0
    // return하려는 ret이 빈문자열이면 empty를 return
    // ----------------------
    // 1. 문자열 code => 문자가 1이면 mode를 바꿈 == code[idx]가 1 ( 0 / 1 / 0 / 1 전환)
    // 2. mode는 0과 1이 있다. => 0부터 code.length -1 까지 범위를 구하는 것이다.
    // -----------------------
    // [모든 전제는 문자가 1이 아니어야 하는 것]
    // 3. mode가 0일 때 idx가 짝수이면 결과값에 code[idx]추가
    // 4. mode가 1일때 idx가 홀수이면 결과값에 code[idx]추가   
    let mode = 0
    let ret = '' 
    for (let idx=0 ; idx < code.length ; idx++) {
        if (code[idx] === '1') {
            (mode === 0) ? mode=1 : mode=0 //mode 전환
            continue //해당 조건에 성립하면 넘어가기 위해서 continue
        }
        //mode가 0일 때 => idx가 짝수이면
        if (mode === 0 && idx % 2 === 0) {
           ret += code[idx] 
        } else if (mode === 1 && idx % 2 === 1) {
            ret += code[idx]
        }
    }
//     empty일떄랑 아닐 떄랑 그것을 기반으로 if 조건 절을 나눴어야 했음
    if (ret === '') {
        return "EMPTY"
    } else {
        return ret        
    }
}