function solution(myString) {
    const result = myString.split("").map((item) => {
        if (item === "a") return "A"
        else if (item !== "A" && item.toUpperCase() === item) return item.toLowerCase()   
        else return item
    })
    return result.join("")
}