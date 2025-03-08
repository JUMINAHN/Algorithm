function solution(s) {
    //s의 길이 4or6 ++ 숫자로만 구성되어있는지?
    //isdigit? => python
    //예외를 변환?    
    // const result = s.split('').filter((item) =>  Number((item)) === NaN)
    const result = s.split('').map((item) =>  Number(item))
    // console.log(result)
    return ((s.length === 4 || s.length === 6) && !result.includes(NaN)) ? true : false
    }
