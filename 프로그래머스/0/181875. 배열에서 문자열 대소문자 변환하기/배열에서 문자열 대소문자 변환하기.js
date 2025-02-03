function solution(strArr) { 
    //reduce도 가능
    return strArr.map((item, idx) => idx % 2 === 1 ? item.toUpperCase() : item.toLowerCase())
}