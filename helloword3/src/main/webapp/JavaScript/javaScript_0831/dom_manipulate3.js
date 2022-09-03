
const members = [
    {mid : '1' ,mname: '관리자',mphone:'010-1234-5678'},
    {mid : '2' ,mname: '김상영',mphone:'010-4362-7894'},
    {mid : '3' ,mname: '김하늘',mphone:'010-1234-1577'},
    {mid : '4' ,mname: '김하늘',mphone:'010-1234-1577'},
    {mid : '5' ,mname: '김하늘',mphone:'010-1234-1577'}


]
//addMember
document.addEventListener('DOMContentLoaded', function(){

let addBtn = document.querySelector('button')



addBtn.addEventListener('click', addMember ) 

let hover2 =document.querySelector('#list>tr')

hover2.addEventListener('mouseover',showinfo)



})

function showinfo (){
    console.log(11)
}

// showMember
document.addEventListener('DOMContentLoaded', function(){

    let addBtn = document.getElementById('addMem')
    
    
    
    addBtn.addEventListener('click', showMember ) 


    let seldel = document.getElementById('seldel')
    
    seldel.addEventListener('click', selectDel ) 
 
    
    })
    
//Fmember
    document.addEventListener('DOMContentLoaded', function(){

        let addBtn = document.getElementById('Fmember')
       addBtn.addEventListener('click', Fmember ) 

        let modiBtn = document.getElementById('modi')
        modiBtn.addEventListener('click', modiMember ) 


       let box = document.getElementById('allC')
       box.addEventListener('click', allChekc ) 


                
        
        
        })
        
//새로고침
let load = document.getElementById('reload')

load.onclick = function(){
    location.reload();
}

// ======================================================
let addMember = function(){

    let mid = document.getElementById('mid')
    let mname = document.getElementById('mname')
    let mphone=document.getElementById('mphone')

if(!mid.value || !mname.value||!mphone.value){
    alert('좀 넣어라')
    return 
}



const mValues = [mid.value,mname.value,mphone.value]

let tr = makeTr(mValues);

document.getElementById('list').appendChild(tr)

mid.value = ''
mname.value = ''
mphone.value = ''
mid.focus()

}
// ========================================================
let showMember = () => {
    let table = document.getElementById('list')
   
    members.forEach( mem=>{
        let mValues = []
        // for(let prop in mem){
        //     mValues.push(mem[prop])
        // }
      
        mValues = Object.values(mem)  //Object.values 속성 속성

      let tr = makeTr(mValues);
    
        table.appendChild(tr)
        
    
    }
  


   
 )}

// =================================================================
function Fmember(){
    let findId =document.getElementById('mid').value

    let trId =document.querySelectorAll('tbody>tr')
    
    // console.log(trId)

        trId.forEach(tr=>{
          tr.className=''

        })



        trId.forEach(tt =>{
           if(tt.children[1].innerText == findId){
            tt.setAttribute('class','focus')
           }
        //    console.log(tt.children[1].innerText)

        })

   
}
// ===============================================================
function modiMember(){
    let findId =document.getElementById('mid').value

    let trId = document.querySelectorAll('tbody>tr')
    
    let mname = document.getElementById('mname').value
    let mphone=document.getElementById('mphone').value

    // console.log(trId)

   



        trId.forEach(tt =>{

           if(tt.children[1].innerText == findId){
            tt.children[2].innerText = mname
            tt.children[3].innerText = mphone


           }
        //    console.log(tt.firstElementChild.nextElementSibling.innerText)

        })

  
}
// =================================================================
 function makeTr(mValues=[]){
    let bb = document.createElement('br')
    let tr = document.createElement('tr')
    let tdtd = document.createElement('td')
    tr.appendChild(tdtd)
    
    let check =  document.createElement('input')
    // console.log(check)
    check.setAttribute('type','checkbox')
    check.setAttribute('class','box2')

    // check.setAttribute('checked',6)
    tdtd.appendChild(check)
    

    check.addEventListener('change',function(){
       
        // let checkPro = document.getElementsByClassName('box2')
        // document.getElementById('allC').checked = 
        //                             [...checkPro].every(item =>item.checked)

    
        let checkPro = document.getElementsByClassName('box2')
        for(let i=0;i<checkPro.length;i++){
            if(checkPro[i].checked==false){
                document.getElementById('allC').checked=false
            }else if([...checkPro].every(item =>item.checked)){
                document.getElementById('allC').checked=true
            }
            
        } 
        // for(let i=0;i<checkPro.length;i++){
        //     if([...checkPro].every(item =>item.checked)){
        //         document.getElementById('allC').checked=true
        //     }
            
        // } 
      

    })


    tr.addEventListener('click', function(){
        //firstChild-> 
        let id=this.children[1].innerText
        let name=this.children[2].innerText
        let tel=this.children[3].innerText
      
        document.getElementById('mid').value = id
        document.getElementById('mname').value = name
        document.getElementById('mphone').value = tel

     
    //    console.log(id)
    //    console.log(name)
    //    console.log(tel)

    },false)

    mValues.forEach(val =>{
    
        let td = document.createElement('td')
        let txt = document.createTextNode(val)
        td.appendChild(txt);
        tr.appendChild(td)
    })
    //삭제버튼
    let td = document.createElement('td')
    let btn = document.createElement('button')
     let txt = document.createTextNode('삭제')
     
     btn.addEventListener('click',function(e){
        this.parentElement.parentElement.remove();
        let id = this.firstElementChild.innerText

        // alert(id+'을/를 삭제합니다.')
        e.stopPropagation(); //이벤트 전파 삭제
     })
   
    btn.appendChild(txt)
    td.appendChild(btn)
    tr.appendChild(td)
     
  

 

        return tr;
 }

//  ===============================================
let allChekc = function(){
    
    let box = document.getElementById('list')
    
   let box2=document.getElementsByClassName('box2')
   
//    console.log(box2[0].checked=true)
if(document.getElementById('allC').checked==true){
for(let i=0;i<box2.length;i++){
    box2[i].checked=true
} 
}

// if( box2[0].checked=false){
//     document.getElementById('allC').checked=false
// }



    // box.forEach(mem=>{
    //     // mem.firstChild.children[0].setAttribute('checked',0)
  
    // })

//     let trId = document.querySelectorAll('tbody>tr')
    
 

//     console.log(trId)

   



//         trId.forEach(tt =>{
// console.log(tt.children[0].getAttribute('checked'))
//            if(tt.children[0].getAttribute('checked') ){
//             tt.children[2].innerText = mname
//             tt.children[3].innerText = mphone


//            }
//            console.log(tt.firstElementChild.nextElementSibling.innerText)

//         })

  

}

let selectDel = function(){

    let checkPro = document.getElementsByClassName('box2')
       let a = [...checkPro]
    console.log(a)
    a.forEach(mem=>{
        console.log(mem)
        if(mem.checked==true){
                   
                  mem.parentElement.parentElement.remove();}
    })


    console.log('포문밖'+checkPro)
    
  
    
    // for(let i=0; i<checkPro.length;i++){
    //     console.log('포문조건문밖'+checkPro[i])
    //     if(checkPro[i].checked==true){
    //         console.log('ㅁㅁ'+checkPro[i] .parentElement.parentElement)
    //         checkPro[i] .parentElement.parentElement.remove();
           
            
    //     }
        
    // } 



}