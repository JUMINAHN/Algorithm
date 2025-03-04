function solution(n){
    return [...String(n)].reduce((acc, num)=> acc + Number(num), 0)
    // console.log(result)    
}