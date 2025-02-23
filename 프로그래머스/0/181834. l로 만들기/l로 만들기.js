function solution(myString) {
    const not = ['a','b','c','d','e','f','g','h', 'i', 'j', 'k']
    return [...myString].map((item) => {
        if (not.includes(item)) return 'l'
        else return item
        }).join('')
    // console.log(result)
    }