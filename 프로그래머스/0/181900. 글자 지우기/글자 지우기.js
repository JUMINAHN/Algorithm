function solution(my_string, indices) {
    // const arr = [] 
    // console.log(my_st)
    //지금 이렇게되면 index가 없어지는 문제
    // replace도 첫번째? 
    // const sth = indices.map((item) => my_string = my_string.replace([...my_string][item], ""))
    // console.log(sth)
    // indices.reduce((acc, num) => my_string.replace()
    // indices.sort() //1부터
    indices.sort((a,b) => a-b) //솔트 작은 것부터
    // console.log(indices)
    const arr = [...my_string]
    indices.forEach((num) => arr[num] = "")
    console.log(arr.join(''))
    return arr.join('')
    // const myStr = [...my_string]
    // myStr.pop(0) //pop안되나? => pop은 마지막 요소만 js에는 .. deque?? => ""로 바꿀까? replace해서?
    // console.log(myStr)
    //indices는 원소에 해당하는 인덱스의 글자를 지우고 이어붙인 문자열을 return
    //기존 배열의 idx가 앞당겨지는건지?

}
