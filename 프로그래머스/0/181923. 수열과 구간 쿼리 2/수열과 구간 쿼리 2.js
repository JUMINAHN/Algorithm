function solution(arr, queries) {
    const result = queries.map(([s,e,k]) => {
        let subResult = []
        for (let i=0; i < arr.length ; i++) {
            if ((s <= i && i<= e) && k < arr[i]) {
                subResult.push(arr[i])
            } 
        }
        // console.log(subResult) 
        // console.log(Math.min(...subResult))
        return Math.min(...subResult) !== Infinity ? Math.min(...subResult) : -1
    })
    
    return result
}