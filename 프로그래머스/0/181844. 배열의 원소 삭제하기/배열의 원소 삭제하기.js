function solution(arr, delete_list) {
    //생각해보면 arr 그대로를 반환
    const result = arr.map((item) => {
        if (delete_list.includes(item)) return ''
        else return item
    })
    return result.filter((item) => !(item === ''))
    
}