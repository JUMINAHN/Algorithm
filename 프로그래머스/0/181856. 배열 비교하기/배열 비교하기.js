function solution(arr1, arr2) {
    //배열의 길이가 다르면 배열의 길이가 더 긴 쪽
    //같다면 모든 원소의 합을 비교해서 더 큰쪽이 크고 같다면 같은 것 
    //arr2가 크면 -1, arr이 크면1, 같으면 0
    if(arr1.length === arr2.length) {
        const ar1 = arr1.reduce((acc, item) => {
            return acc + item
        },0)
        const ar2 = arr2.reduce((acc, item) => {
            return acc + item
        },0)
        if (ar1 > ar2) return 1
        else if(ar1 < ar2) return -1
        else return 0
        }
        else if(arr1.length > arr2.length) return 1
        else return -1
    
}