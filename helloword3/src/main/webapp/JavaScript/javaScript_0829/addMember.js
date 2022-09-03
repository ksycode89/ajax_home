function addMember(mem={}){
    let tr = `<tr>`;
    for (let prop in mem){
        tr +=`<td>${mem[prop]}</td>.`; 
    }
    tr+=`</tr>`
    return tr;
}

function makeHD(){
    let titles = ['아이디','이름','지역']
    let tr = '<tr>';
    for(let tittle of titles){
        tr+= `<th>${tittle}</th>`;
    }
    tr+=`</tr>`;
}

const member =[
    {id:'middle',name : '주훈주훈', city :'대구'},
    {id:'left',name : '현성성', city :'Daegu'},
    {id:'right',name : '상영', city :'경산'}
]



let str = `<table border = 1>`;
// `<tr><th>아이디</th><th>이름</th><th>지역</th><tr>`
str += makeHD();

for(let mem of member){
    str+= addMember(mem);

}
str+=`</table>`;

document.write(str);
