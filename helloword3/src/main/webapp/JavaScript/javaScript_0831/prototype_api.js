const names = [
    '이현성','황용주','이주훈','최승현']


let members = names.map((name,idx)=>{
    let obj = {}
        obj.sno = idx+1;
        obj.name = name;
        
        return obj;

        

})


console.table(members)

let membersF = members.filter(find => {
    //return true이면 그걸 반환해줌
     find.name.startsWith
    return  '이'==find.name.slice(0,1)
})  

console.table(membersF)

let filterfnc = mem => {
    mem.name.startWith('이')
}

// ================================================================

let arrMember = names.reduce((a,b,c)=>{
let ojb = {}
    ojb.name = b;
    ojb.sno = c+1;
    
    a.push(ojb)
    return a

},[])

console.log(arrMember)


let less = arrMember.reduce((a,b)=>{
    if(b.name.slice(0,1)=='이'){
        a.push(b)
    }
return a

},[])

console.log(less)
