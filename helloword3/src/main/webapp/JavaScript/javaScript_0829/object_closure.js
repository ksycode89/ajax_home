

let dnc = function(){
    console.log('함수호출')
}
let a = [1,4,5]

a.forEach(element => {
    console.log(element)
});



function outerFunc(id){
    let saying = `${id}+안녕!`

    return function(){
        return saying ;
    }
// return console.log(saying)
}

let closure1 = outerFunc('김상영')
console.log(closure1)
console.log(closure1())

function initCnt(){
    let cnt = 10;

   return  function addCnt(){
        cnt++;
        console.log(cnt);
    }

}

let plusc = initCnt();
plusc();
plusc();
plusc();