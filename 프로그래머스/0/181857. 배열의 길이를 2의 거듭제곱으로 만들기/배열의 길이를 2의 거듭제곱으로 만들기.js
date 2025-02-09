function solution(arr) {
    let i = 1
    while(Math.pow(2, i) < arr.length) { 
        if(Math.pow(2, i+1) <= arr.length) {
            i++
        } else {
            return [...arr, ...new Array(Math.pow(2, i+1) - arr.length).fill(0)]
        }
    }
  return arr
}