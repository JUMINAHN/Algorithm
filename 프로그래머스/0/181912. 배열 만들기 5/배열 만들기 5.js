function solution(intStrs, k, s, l) {
    //intStrs는 숫자로 이루어짐
    //intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라서 정수 변환
    //5를 5만큼 자르는 것 => splice를 사용하면 될 것 같음, 새로운 값 추가 X
    // const spliceArr = intStrs.map((item) => [...item].splice(k, s)) //splice가 제거할 요소
    const sliceData = intStrs.map((item) => [...item].slice(s, s+l).join("")) //길이만큼 자르기
    const result = sliceData.filter((item) => (Number(item) > k))
    //이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return
    // console.log(result)
    return result.map((item) => Number(item))
    
}