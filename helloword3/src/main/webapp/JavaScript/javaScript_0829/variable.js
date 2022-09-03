

let kname = 'Kim'
kname ='sang'

const cname = 'yedam'  /* ==finally */


var age = 20 /* 안씀. 지역변수로 인식을 못함 */

const randomM=[]


for(let i =0; i<5; i++){

let val =Math.ceil(Math.random()*29)+21
randomM[i]=val



}



randomM.forEach(function (val){
    document.write(val+'<br>')
})