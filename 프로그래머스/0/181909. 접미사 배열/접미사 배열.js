//사전순 정렬
//0,1까지 => 0,2까지 이렇게 되는 것으로

function solution(my_string) {
    // length만큼 => 뒤에서부터 접근
    const result = [...my_string].map((item, idx) => {
        //idx 뒤에서부터
        return [...my_string].slice(my_string.length-(idx+1)).join("") //idx만큼 => 0부터 시작하기 때문
    })
    //result 내용에 대해서 사전순 정렬이 필요함
    // console.log(result)
    // return result
    // console.log(result)
    // console.log(result.sort((a,b) => a-b)) //sort가 안된다.
    // console.log(result.sort())
    // return result.sort((a,b) => a-b)
    return result.sort()
    // return answer;
}