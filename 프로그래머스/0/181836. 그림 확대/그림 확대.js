function solution(picture, k) {
    let final = []
    const result = picture.map((items) => {
        const sub = items.split('').map((item) => {
            return item.repeat(k)
        })
        for (let i=0; i<k; i++) {
            final.push(sub.join(''))
        }
    })
    console.log(final)
    return final
}
