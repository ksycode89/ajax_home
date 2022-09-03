

let  frm = document.createElement('form');
    frm.setAttribute('action', 'arry_basic.html');
    frm.setAttribute('method', 'post');

    let labelId = document.createElement('label');
    labelId.setAttribute('for','user_id');
    labelId.innerText = '사용자id';
    frm.appendChild(labelId);

  


     let inputId = document.createElement('input');
     inputId.setAttribute('type','text');
     inputId.setAttribute('name','user_id');
     inputId.setAttribute('id','user_id');
    frm.appendChild(inputId);

    let aa = document.createElement('br');
    inputId.after(aa)

    let labelPw = document.createElement('label');
    labelPw.setAttribute('for','user_pw');
    labelPw.innerText = '사용자pw';
    frm.appendChild(labelPw);

    let inputPw = document.createElement('input');
    inputPw.setAttribute('type','text');
    inputPw.setAttribute('name','user_Pw');
    inputPw.setAttribute('id','user_Pw');
   frm.appendChild(inputPw);

   let aa2 = document.createElement('br');
//    inputPw.after(aa2)

   let but = document.createElement('button')
   but.innerText='login'
   
   frm.appendChild(but);



    document.getElementById('show').appendChild(frm);
    console.log(frm);

    