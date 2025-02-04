function solution(myString, pat) {
    //이거 문자열 찾기
    //pat의 길이만큼 => 0부터 5 : 6글자
    //3글자 길이만큼 => 0~3, 1~4, 2~5, 3~6 검사 => 6 - 3 + 1 
    //그래서 map만큼 돌면 안됨 => 중간에 idx 나가면 안돌 수 있음
    const patLength = pat.length
    let count = 0
    for (let i=0; i<myString.length - pat.length + 1 ; i++) {
        if([...myString].slice(i, i+patLength).join('') === pat) {
            count++
        }
    }
    // console.log(count)
    return count
}
