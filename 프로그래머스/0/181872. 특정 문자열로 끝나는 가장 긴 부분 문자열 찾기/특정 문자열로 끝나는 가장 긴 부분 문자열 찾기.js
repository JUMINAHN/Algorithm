//아까 그거랑 비슷하게
function solution(myString, pat) {
    let findD = []
    for (let i=pat.length; i <= myString.length; i++){
        //string이라서
        if ([...myString].splice(0, i).join("").endsWith(pat)){
            findD.push([...myString].splice(0, i).join(""))
        }
    }
    // console.log(findD[findD.length-1])
    return findD[findD.length-1]
    
}