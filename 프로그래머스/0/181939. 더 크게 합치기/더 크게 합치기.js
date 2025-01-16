function solution(a, b) {
  //두 정수를 붙여서 쓴 값 반환
  // a + b와 b+a 중 더 큰 값을 return 하는 함수를 완성
  // a+b === b+a가 같다면 a+b를 return
  let num1 = Number(String(a) + String(b)) //문자열로
  let num2 = Number(String(b) + String(a))
  if ( num1 > num2) {
    return num1
  } else if (num1 === num2) {
    return num1
  } else {
    return num2
  }
  // console.log(num1, "num1")
  // console.log(num2, "num2")
  //number 전환
  // console.log(Number(num1), "num1 전환")
  // console.log(Number(num2), "num2 전환")
  // if (Number(num1) > Number(num2)) {
  //   return num1
  // } else if (Number(num1) === Number(num2)) {
  //   return num1
  // } else {
  //   return num2
  // }
  // } else if (Number(num2) > Number(num1)) {
  //   return num2
  // }
}