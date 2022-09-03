
let yedam = {}


let num=[]
num[0]=90
num[1]=80
num[2]=75
num[3]=85
num[4]=83
num[10]=77

yedam.id = 'dark'
yedam.name = '김상영'
yedam['score']=num;


// for(let n of yedam){
//     document.write(n)
// }


document.write(yedam['score']+'<br>')
document.write('<br>')
let yedams= []

let 주훈= {
    no:'21',
    name:'이주훈',
    socre:89
}

let 현성 = {
    no:'20',
    name:'이현성',
    socre:89
}
let 순탁 = {
    no:'19',
    name:'순탁쓰',
    socre:91
}

yedams[0]=주훈
yedams[1]=현성
yedams[2]=순탁

let str='<ul>'
for (let n of yedams){
    document.write('번호 : '+n.no+'<br>'+'이름 : '+n.name+'<br>'+'점수 : '+n.socre  +'<br><br>')
    str+=  '<div style ="border: 1px solid red; width : 120px; margin-bottom : 5px;"><li>'+'번호 : '+n.no+'</li><li>'+'이름 : '+n.name+'</li><li>'+'점수 : '+n.socre  +'</li>'+'<br><div>'
}
for(let t in 현성){

    document.write(`<p>${t}</p>`)

}

str+='</ul>'

document.write(str)

let numm = 30;
document.write(```````numm의 같은 값은 ${numm} 입니다.`)
// console.log(`numm의 같은 값은 ${numm}ㅇ`)