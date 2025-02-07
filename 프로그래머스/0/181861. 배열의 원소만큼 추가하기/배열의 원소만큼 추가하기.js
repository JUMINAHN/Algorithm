function solution(arr) {  
    return arr.reduce((acc, num) => {
        const newArr = []
        for (let i=0; i<num ; i++) {
            newArr.push(num)
        }
        return [...acc, ...newArr]
        //acc.push(newArr) //..?
        // return acc.push(newArr) //배열로 => 이게 왜 안돼? 
        // return [...acc, newArr] //배열로 
        // return acc.push(num)
    }, [])
}