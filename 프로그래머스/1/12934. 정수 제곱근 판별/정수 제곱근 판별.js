function solution(n) {
    //n이 x의 제곱근인지 판별하려고 한다.
    //n이 양의 정수 x의 제곱이라면 x+1를 리턴하고 아니라면 -1을 리턴한다.
    //n이 121이면 ==> 11의 제곱근인데 ... 500000000의 제곱근이 무엇일지..? 일단 이거의 절반만큼
    //소수점여부 확인해야하는데 => includes.
    // console.log(Math.sqrt(n))
    // console.log(typeof(Math.sqrt(n)))
    if(!String(Math.sqrt(n)).includes('.')) {
        // console.log('제곱근')
        return Math.pow((Math.sqrt(n))+1, 2)
    } else {
        return -1
    }
}