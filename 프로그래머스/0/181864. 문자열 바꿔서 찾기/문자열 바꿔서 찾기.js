function solution(myString, pat) {
    //A를 B로, B를 A로 바꾼 문자 연속하는 부분 문자열중 pat이 있으면 1
    const newStr = myString.split("").map((item) => item === "A"? "B" : "A").join('') //replace해도 될 것 같긴 한데
    return newStr.includes(pat) ? 1 : 0
    }