function solution(my_string, queries) {
    //queries => s, e -> s부터 e까지 뒤집으라는 의미
    for ([s,e] of queries) {
        //my_string의 s부터 e까지 뒤집어라
        let str1 = [...my_string].slice(0, s)
        let rever = [...my_string].slice(s, e+1).reverse()
        let str2 = [...my_string].slice(e+1)
        // console.log(str1.concat(rever,str2))
        my_string = str1.concat(rever,str2)
        // console.log(str1 + [...rever] + str2)
        
        // console.log([...str1 + ...rever + ...str2 ])
    }
    return my_string.join('')       
}