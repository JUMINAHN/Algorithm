function solution(n) {
    //모든 자연수 x에 대해서 현재의 값이 x이면 => x가 짝수일 때 / 2
    //x가 홀 수 일 때 => (3 * x) + 1
    //이걸 반복하면 ㅇ너젠간 반드시 x가 1이 되는지 물업노ㅡㄴ 것 == 콜라츠 문제
    
    //1이 될 때 까지?
    const result = []
    while (n !== 1) { //1이 아닐때까지
        result.push(n) //n
        if (n % 2 === 0) n /= 2
        else if (n % 2 === 1) n =((3 * n) + 1)
    }
    //1이 아닐 떄 까지니까
    result.push(1) //1추가
    return result
    
}