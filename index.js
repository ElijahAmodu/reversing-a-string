function solution(str){
    let newStr = ""
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }
    console.log(newStr)
}
solution("come")

//Faster way 

function solutions(str){
    return str.split("").reverse().join("");
}
solutions(fast)