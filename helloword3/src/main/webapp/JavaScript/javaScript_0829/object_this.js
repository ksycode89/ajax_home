

let obj = {}


obj.act = function(){
    this.value = 'default value'

    console.log(this)

    function innerAct(){
    this.value = 'innerAct value'  
    console.log(`innerAct value + ${this.value}`)
}



function innerReact(caller){
    caller.value = 'innerReact value'
    console.log(`this.value+${this.value}`)
    console.log(`caller.value+${caller.value}`)

}

console.log('obj객체의 this.value'+this.value);

innerReact(this);

console.log('obj객체의 this.value'+this.value)

}
obj.act();


//event

let btn = document.createElement ('button');
btn.innerHTML = '클릭';

btn.onclick = function(){
    console.log(this)
}

document.querySelector('body').append(btn)
console.log(btn);