function solution(s) {
    //객체로 하나 소문자들을 만들어서
    //모두 -1로 채워둔다. -> 그리고 push
    //그리고 찾은 index의 경우 객체에 index를 넣준다. -> 그리고 push
    const alpha = {
        'a' : -1, 'b' : -1, 'c' : -1, 'd' : -1, 'e' : -1, 'f' : -1, 'g' : -1, 'h' : -1,
        'i' : -1, 'j' : -1, 'k' : -1, 'l' : -1, 'm' : -1, 'n' : -1, 'o' : -1, 'p' : -1,
        'q' : -1, 'r' : -1, 's' : -1, 't' : -1, 'u' : -1, 'v' : -1, 'w' : -1, 'x' : -1,
        'y' : -1, 'z' : -1
    }
    return [...s].map((item, idx) => {
        if (alpha[item] === -1) {
            alpha[item] = idx
            return -1
        } else {
            const res = idx-alpha[item]
            alpha[item] = idx
            return res
        }
    })
}