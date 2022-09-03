
let h3 = document.createElement('h3');
    h3.innerHTML='회원등록화면'

    console.log(h3)
   

    let br=document.createElement('br');
    h3.appendChild(br);
  

    let labelId = document.createElement('label');
    labelId.setAttribute('for','mid');
    labelId.innerText = '회원아이디';
    h3.appendChild(labelId);

    //  br=document.createElement('br');
    //  labelId.appendChild(br);

     let inputId = document.createElement('input');
     inputId.setAttribute('type','text');
     inputId.setAttribute('name','mid');
     inputId.setAttribute('id','mid');
     h3.appendChild(inputId);

     br=document.createElement('br');
     inputId.appendChild(br);

     let labelname = document.createElement('label');
     labelname.setAttribute('for','mname');
     labelname.innerText = '회원 이름';
    h3.appendChild(labelname);
    
 
  

     let inputname = document.createElement('input');
     inputname.setAttribute('type','text');
     inputname.setAttribute('name','mname');
     inputname.setAttribute('id','mname');
     h3.appendChild(inputname);

  
 



    document.querySelector('body').appendChild(h3)







