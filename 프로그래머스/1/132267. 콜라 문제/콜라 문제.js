function solution(a, b, n) {
    let res = 0 //나머지
    let get = 0 //받는 내용
    //나머지 1이 왜 안돼?
    while(n >= a) {//a개 미만 => `미만`
        res = (n % a)
        // console.log(res)
        get += (Math.floor(n/a)) * b
        n = Math.floor(n / a) * b //n개 만큼 주니까
        if (res > 0) {
            n += res
            res = 0
        }
        // console.log(get)
        // return get
    }
    return get
    // console.log(get)
    
}