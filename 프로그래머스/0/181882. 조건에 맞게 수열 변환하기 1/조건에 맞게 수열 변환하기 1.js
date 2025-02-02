function solution(arr) {
    //50보다 크거나 같은 + 짝수라면 -> 2로 나누고 
    //50보다 작은 홀수라면 => 2를 곱한다
    // const result = arr.reduce((acc, num) => (num >= 50 && num % 2 ===0) ? acc * 2 : acc / 2, arr)
    // const result = arr.reduce((acc, num) => (num >= 50 && num % 2 ===0) ? acc * 2 : acc / 2, arr)
    // const result = arr.reduce((acc, num) => (num >= 50 && num % 2 ===0) ? acc.push(num * 2) : acc.push(num / 2), []) => acc.push is not function
    // const result = arr.map((item, idx) => (item >= 50 && item % 2 === 0) ? item / 2 : item * 2)
    return arr.map((item, idx) => {
        if (item >= 50 && item % 2 === 0) return item / 2 
        else if (item < 50 && item % 2 === 1) return item * 2
        else return item //나머지 값들은 변경 조건에 해당하지 않으므로 바꾸지 않음
    })
        // console.log(result)
    }
                           