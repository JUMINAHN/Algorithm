function solution(my_string, m, c) {
    const slice = my_string.length / m
    let answer = ''
    for (let i = 0 ; i < slice ; i++) {
        // answer += [...my_string].slice(0*i, m*i).filter((num, idx) => idx === c)
        // console.log([...my_string].slice(m*i, m*(i+1)))
        answer += [...my_string].slice(m*i, m*(i+1)).filter((num,idx) => idx === c-1)
        // console.log([...my_string].slice(m*i, m*(i+1)).filter((num,idx) => idx === c-1))
    }
    return answer
    // console.log(slice)
    // var answer = '';
    // return answer;
}