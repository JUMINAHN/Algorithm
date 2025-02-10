function solution(num_str) {
    // num_str.map((item) => Number(item))
    return [...num_str].reduce((acc, item) =>{
        return acc + Number(item)
    } ,0)
}