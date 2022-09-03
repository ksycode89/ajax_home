const member =[
    {id:'middle',name : '주훈주훈',city :'대구',   tell : '123',성별 :'M'},
    {id:'left',  name : '현성성',  city :'Daegu', tell : '1234' ,성별 :'M'},
    {id:'right' ,name : '상영',    city :'경산',  tell : '12345' ,성별 :'M'},
    {id:'far' ,name : '진희',    city :'대구어딘가',  tell : '123456',성별 :'Y'}

    ] 

let str = `<table border=1>`

str+= `<tr><th>id</th><th>name</th><th>city</th><th>tell</th><th>성별</th></tr>`

    member.forEach((val,ind,ary) => {
        if (val.성별 == 'M')
        makeTr(val,blue)
        else
        makeTr(val,red)
    })
    


    function callBack(val,ind,ary){
        console.log(val)
    }

    function makeTr(mem,color){
        let tr = `<tr style ='color : ${color}'>`
        for(let prop in mem){
            tr+=`<td>${mem[prop]}`
        }

    }