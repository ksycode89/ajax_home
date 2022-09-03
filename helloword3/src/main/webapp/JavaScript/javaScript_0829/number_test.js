
let num = [23,78,45,18,9,78,22]

let result = 0 /* 짝수의 합 */

num.forEach((val)=>{
    if(val%2==0)
    result += val

    
})
document.write('짝수합'+result)

let result2 = 0;

num.forEach((val,ind)=>{
    if(ind%2==0)
    result2 += val

    
})
document.write(result2)