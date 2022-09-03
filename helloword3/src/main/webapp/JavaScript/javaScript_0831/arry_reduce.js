const number = [2, 56, 7, 9, 0, 9]

let sum = 0;

number.forEach(num => {
    sum += num

})

console.log(sum)

//a누적b누적할값 c 인덱스 d 총배열
let result = number.reduce((acc, val, idx, arr) => {
        console.log(acc, val, idx, arr)
        return acc + val;
    }, 0

)
result = number.reduce((a, b) => {

    a.push(b + 2);
    return a

}, [])




//ul li 
result = number.reduce((a, b, c) => {
    if (c == 0) {
        a = '<ul>'
    }
    a += '<li>' + b + '</li>';

    if (c == (number.length - 1)) {
        a += '</ul>'
    }

    return a

}, '')
document.write(result);

result = number.reduce((a, b, c) => {
    if (a < b) {
        a = b

    }
    return a
}, 0)

console.log('최대값 : ' + result)