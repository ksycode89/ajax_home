


const members = ['이주훈','이현성','진정욱','백진희']
const newMems = ['이주훈','김상영','진정욱','노은경']
const kMem=[]
let pos = members.indexOf('이현성')

console.log(pos)

function a (){
for(let i=0;i<4;i++){
   for(let f=0; f<4; f++){
    if(members[i] != newMems[f] && kMem[f] !=newMems[f]){
     
       kMem.push(newMems[f])
    }
   }


}
}
a();
console.log(newMems)
console.log(members)
console.log(kMem)

newMems.forEach(mem=>{
    if(members.indexOf(mem)==-1){
        members.push(mem)
    }
})

console.log(members)

//true false 로 반환 있냐없냐로 
let result = members.some(mem=>{
    return mem ='노은경'
})

result = members.every(mem => members.length==3)
result = members.find(mem => m)
console.log(result)