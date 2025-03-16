function solution(s) {
    //큰것부터 작은순으로 => 대문자가 소문자보다 더 작은 것으로 분류된다. 
    //정렬
    const newS = [...s]
    return newS.sort().reverse().join('') //문자열은 일반 sort === 대 -> 소에서 a부터 시작 => 그걸 반대로
    // console.log(newS) //
    }