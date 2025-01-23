function solution(my_string, index_list) {

    // const result = []
    const result = index_list.map((item, idx) => {
       return my_string[item] //그냥 단순 
    })
    // console.log(result.join(''))
    return result.join('')
}