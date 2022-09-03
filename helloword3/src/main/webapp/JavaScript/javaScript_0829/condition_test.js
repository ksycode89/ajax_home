


const member =[
    {id:'middle',name : '주훈주훈',city :'대구',   tell : '123'},
    {id:'left',  name : '현성성',  city :'Daegu', tell : '1234'},
    {id:'right' ,name : '상영',    city :'경산',  tell : '12345'}
] 

function callF(fnc){
    let name = 'Ju'
    fnc(name);
}


callF(wellFNC);

function wellFNC(param){
    document.write('wellcome '+ param)
    console.log('wellcome '+ param)
}

// let hellFNC = function(param){
//     document.write('HEllO '+ param)
//     console.log('HEllO '+ param)
// }


// 실행 구문이 하나뿐이라면 {}도 생략가능
let hellFNC = (param) =>  document.write('HEllO '+ param)
   
