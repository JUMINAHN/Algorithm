function solution(myStr) {
    // const data = [...myStr].filter((item) => item !== 'a' || item !== 'b' || item!== 'c')
    const result = []
    for(let i=0; i<myStr.length;i++){
        if (myStr[i] === 'a' || myStr[i] === 'b' || myStr[i] === 'c') result.push('.')
        else result.push(myStr[i])
    }
    //console.log()
    const newA = result.join('').split('.').filter((item) => item !== '')
    return newA.length > 0 ? newA : ["EMPTY"]
}   