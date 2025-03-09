function solution(s) {
    //단어, 하나이상의 공백문자로 구분
    //짝수번째 알파벳은 대문자, 홀수번째 알파벳은 소문자로
    //단, 공백을 기준으로 짝/홀을 판단해야 함
    return s.split(' ').map((items) => {
        // console.log(items)
        //item === try
        return [...items].map((item, idx) => {
            if (idx % 2 === 0) return item.toUpperCase()
            else return item.toLowerCase()
        }).join('')
    }).join(' ')
    // console.log(result.join(' '))
    
    }