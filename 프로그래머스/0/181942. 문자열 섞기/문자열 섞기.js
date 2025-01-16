function solution(str1, str2) {
    var answer = '';
    //각각 내용 섞기 => 2중 for문은 안될 것 같음
    // str1 + str2 하나씩 붙이고 짝/홀/짝/홀 순으로 for문을 돌리면 될 것 같음 => 이게 아님
    // 각 str1의 0번쨰 index, str2의 0번째 index를 출려하면 됨
    for (let i=0 ; i < str1.length ; i++) {
        //띄워쓰기가 없어야 함
        answer += (str1[i] + str2[i]) 
    }
    return answer;
}