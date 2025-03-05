function solution(x) {
    //x의 자릿수의 합으로 x가 나누어져야한다.
    //18의 자릿수 합은 => 1 + 8 = 9
    //18은 9로 나누어 떠떨어짐 => true/false로
    
    //string 변환 => toString()으로
    //parseInt?
    // console.log([...String(x)])
    // console.log(x.toString())
    // const sum = [...x.toString()].reduce((acc, num) => acc + Number(num))
    // console.log(sum)
    const sum = [...String(x)].reduce((acc, num) => acc + Number(num), 0) //초기값설정
    return (x % sum === 0) ? true : false
    }