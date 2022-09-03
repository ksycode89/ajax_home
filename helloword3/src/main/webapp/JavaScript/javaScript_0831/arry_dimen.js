
const members= [
{name:'홍길동',age :27},
{name:'김상영',age:34},
{name:'장길상',age:23}

]

members.push({name:'소도람',age :26})
members[0][1]=22;

members.forEach(member => console.log('이름 : '+member['name']+' 나이 : '+member['age']+'살'))

console.table(members)

let nameC =members.map(member=>member['age'])

console.log(nameC)