function solution(binomial) {
    // console.log(binomial.split("")) => op 기준으로 잘라야함
    let result = ''
    if (binomial.includes("+")) {
        result = binomial.split("+")
        return Number(result[0]) + Number(result[1])
    } else if(binomial.includes("-")){
        result = binomial.split("-")
        return Number(result[0]) - Number(result[1])
    } else {
        result = binomial.split("*")
        return Number(result[0]) * Number(result[1])
    }
    
    // switch op {
    //     case "+":
    //         return a + b
    //     case "-":
    //         return a - b
    //     case "*" :
    //         return a * b
    // }
    // var answer = 0;
    // return answer;
}