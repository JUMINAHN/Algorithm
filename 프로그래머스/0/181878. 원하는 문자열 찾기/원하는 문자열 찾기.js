function solution(myString, pat) {
    //연속된 부분 문자열 중 pat이 존재하면 1, 그렇지 않으면 0
    //그냥 문자upperlower 다 상관없이
    const result = myString.toUpperCase().includes(pat.toUpperCase())
    return result ? 1 : 0
    }