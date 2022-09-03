

let strAry = []


let num=0;

while(num<10){
strAry[num]='num'+num
num++

}

for(let a of strAry){
    document.write(a+`<br>`)
}

let members=[
   {id : 'user1' ,name : '사용자1'},
   {id : 'user2' ,name : '사용자2'},
   {id : 'user3' ,name : '사용자3'}
    
]

let str =`<table border=1>`
// str+= `<tr><td>55</td></tr>`
 for(let member of members){
    // document.write(a)
    str+=`<tr>`
     for(let b in member){
    //     // document.write(b+' : '+a[b])
         str+= `<td>${member[b]}</td>`
      
    
    //     // document.write(str)
       
     }
    // //  document.write('========'+'<br>')
     str+=`<td><button onclick="alertName (event)">클릭</button></td>`
     str+= '</tr>'
 }

function alertName(e){
    console.log(e.target.parentElement.parentElement.style.backgroundColor = 'pink')
}



str+= '</table>'
document.write(str)

// ===================================================
str = `<table border=1>`

members.forEach(createTable)
str+=`</table>`
document.write(str)


    function createTable(val,idx){
        if(idx==0){
            str+= '<tr>'
            for(let prop in val ){
                str+= `<th>${prop}</th>`
            }
            str+='</tr>'
        }


        str += '<tr>';
        for(let prop in val ){
            str+= `<td>${val[prop]}</td>`
        }
        str+='</tr>'
    }
    
