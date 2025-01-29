function solution(arr, intervals) {
    const result = []
    for ([first, second] of intervals) {
        // result.concat(arr.slice(first, second+1)) //concat이 안되는데
        result.push(arr.slice(first, second+1)) //concat이 안되는데
    }
    // console.log(result)
    // console.log(result[0].concat(result[1])) // [ 2, 3, 4, [Function: concat] ]
    return result[0].concat(result[1]) // [ 2, 3, 4, [Function: concat] ]
}