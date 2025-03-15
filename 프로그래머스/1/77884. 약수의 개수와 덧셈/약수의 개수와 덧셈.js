function solution(left, right) {
    let sum = 0
    for (let i=left; i<=right; i++) {
        let result = []
        for(let j=1; j<=i; j++) {
            if(i % j===0) result.push(j)
        }
        if(result.length % 2 === 0) {
            sum += i
        } else {
            sum -= i
        }        
    }    
    // console.log(sum)
    return sum

    
}