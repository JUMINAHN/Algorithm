function solution(price, money, count) {
    //n번째 이용한다면 원래 이용료의 n배
    //100, 2번째에는 200, 3번쨰에는 300 => 계속 n배로 가격이 인상됨
    //즉 count번 타게되면 자신의 가진 금액에서 얼마가 모자라는지 return?

    let sum = 0
    for (let i=1; i<= count; i++) {
        sum += (price * i)
    }
    console.log(sum)
    return (sum-money>0) ? sum-money : 0
}