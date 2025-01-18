function solution(num_list) {
    //num_list의 홀수만 순서대로 이어붙인수 + 짝수만 순서대로 이어붙인 수의 합을 return
    //순회  => for..of, for..in
    let odd = '' //홀
    let even = ''  //짝
    for (let num of num_list) {
        (num % 2 === 0) ? even += String(num) : odd += String(num)
    }
    return Number(odd) + Number(even)
}