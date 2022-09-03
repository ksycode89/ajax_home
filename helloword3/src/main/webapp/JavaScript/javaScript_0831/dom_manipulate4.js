

document.addEventListener('DOMContentLoaded', function(){
    //등록이벤트
    let addBtn = document.querySelector('button')
    addBtn.addEventListener = ('click',addMember);

});  //dom요소에 이벤트 등록.

let addMember=()=> {

    let mid = document.getElementById('mid');
    let mname = document.getElementById('mname');
    let mphone = document.getElementById('mphone');
    console.log(mid.value, mname.value, mphone.value);

    
    // 저장값이 없으면 warning.
    if(!mid.value || !mname.value || !mphone.value) {
        alert('필수 값을 입력하세요!');
        return;  // 함수종료.
    }
    const mValues = [mid.value, mname.value, mphone.value];
    
    let tr = document.createElement('tr');

    mValues.forEach(val =>{
        let td = document.createElement('td'); // id위치. <td>user1<td1>
        let txt = document.createTextNode(val);
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1<td1></tr>
    });

    document.getElementById('list').appendChild(tr);

    //초기화.
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
}; // end of addMember();