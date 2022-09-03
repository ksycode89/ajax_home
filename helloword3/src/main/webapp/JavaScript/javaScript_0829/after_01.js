// 1~100사이 5개  최대값


let num = []

let count=0;
// document.write(Math.ceil(Math.random()*100))


    while(count<5){
    num[count]=Math.ceil(Math.random()*100)+1
    count++

    }


// document.write(num)
let max=0;

str=`<table border=1>`

for(let a of num){
    str+=`<tr><td>${a}</td></tr>`
    if(a>max)
    max=a
   
    // document.write('값 : '+a)

  
}
str+=`<tr><th>max</th></tr>`
str+=`<tr><td>${max}</td></tr>`
str+=`</table>`
document.write(str);
// document.write('<br>'+'최대값 : '+max)

var a = 1;
var b =8 ;

function outF(){
    function innerF(){
        a=b;
        b=6;
        
    }
    console.log(a)
    a=2;
    b=5;
    innerF();
    console.log(a)
    var b = 2;
    console.log(b)

}

outF();
console.log('a는 ' +a);  console.log('b는 '+b)

const arr = []

arr.push(10);
arr.push(30);

let ojb= {
    sname : 'Kim',
    age : 20 ,
    friends : [{sname : 'Lee'}],
    addFriend : function(friend){
        this.friends.push(friend)
     },
     friendList : function(){
       for(let i =0; i<ojb.friends.length; i++){
          console.log(ojb.friends[i].sname)
    
       }
    }
}

ojb.addFriend( {sname : 'Park'})
ojb.addFriend({ sname: 'Yoda',age : 33, phone : '111-1111-1111'})

// console.log(ojb.friends[2]['sname'])
ojb.friendList();


