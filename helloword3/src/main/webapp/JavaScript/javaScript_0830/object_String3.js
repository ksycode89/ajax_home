
let itmes =    ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam praesentium eos fugit saepe tempore vitae quia? Sint soluta recusandae eius perspiciatis eligendi sequi vel assumenda molestias, quis doloribus et blanditiis!'

let bdy = document.querySelector('body')
let div = document.createElement('div')
bdy.append(div);

let word =itmes.split(' ');

word.forEach(word=>{
    let span = document.createElement('span')
    span.innerText = word;

    div.append(span);

})

let inp = document.createElement('input')
let bott = document.createElement('button')
bott.innerText= 'find';
bott.onclick = function(){
    let findW = inp.value

    let spans = document.querySelectorAll('span');
    // console.log(findW)
    // console.log(spans)

    spans.forEach(function(span){
        if(findW==span.innerText){
         return span.remove()
        }
    })
    

}

document.querySelector('div').after(inp,bott)
