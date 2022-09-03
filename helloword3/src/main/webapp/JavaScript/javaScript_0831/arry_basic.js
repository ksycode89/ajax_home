//push()/Pop() - 더하기 제거하기
//unshift() :앞에추가 shift()앞에제거
//slice()=> 잘라서 새롭게 만들어줌
//splice(위치, 대체할 갯수, 대체할값들) =>  

const names = [];

names[0]='이주훈'
names[names.length]='이현성';
names[names.length]='정욱이';
names[names.length]='탁쓰순';

names.push('용주쓰'.slice(0,2))//원본은 유지 시켜줌

names.shift();

names.unshift('김상영')

//splice 추가
names.splice(1,2,'스앙님','김민지')

names.forEach(name=> console.log(name))



