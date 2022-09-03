
let str = 'Good m   orning! @'


console.log(str.slice(2,7))

console.log(str.slice(3))

console.log(str.slice(-2))


console.log(str.slice(2,-2))
console.log(str.substring(2,-7))

console.log(str.indexOf('m'));

str = 'good moring, good akfmaelkf good almfalkemflk, good gmaelkfmealkf'

let postion = str.indexOf('good',str.indexOf('good')+1);
console.log(postion+'포지션')

let cnt = 0;
let pos = str.indexOf('good')

while(pos>=0){
    cnt++
    pos = str.indexOf('good',pos+1)
}

console.log(cnt+'회')

const member = [
    {이름 :'김상영', 나이 : '34'},
    {이름 :'이주훈', 나이 : '30'},
    {이름 :'이현성', 나이 : '28'},
    {이름 :'순탁쓰', 나이 : '31'}
]


let searchKey = prompt('찾을 이름을 입력하세요.');

member.indexOf('이름')
console.log(member[1])

member.forEach(val=>{
    if(searchKey==val.이름){
     return console.log(val.나이)
    }
})

