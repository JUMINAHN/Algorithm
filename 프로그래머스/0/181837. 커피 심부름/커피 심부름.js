function solution(order) {
    //아메리카노 4500
    //카페라떼 5000
    //아무거나 === 아메리카노
    const result = order.map((item) => {
        if (item.includes('americano')) return 4500
        else if (item.includes('anything')) return 4500
        else return 5000
    })
    // console.log(result)
    return result.reduce((acc, num) => acc + num, 0)
    // console.log(price)
}