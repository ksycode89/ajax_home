
let str1 = 'hello'
let str2 = new String (' hello friend ')

console.log(str1,str2,str1==str2, str1===str2)

console.log(typeof str2.valueOf())

console.log(str1.substring(0,3))

let result = eval(new String('1+2*3').valueOf())

console.log(eval(('1+2*3')))


console.log(result)

let trimStr = '   s공백 제거 하는 메소드  '


String.prototype.ltrim = function(){
return this.replace('소드','서드')
}
console.log(trimStr.trim())
console.log(trimStr.ltrim())

///\s+