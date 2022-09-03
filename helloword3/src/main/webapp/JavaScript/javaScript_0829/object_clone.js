

let orginOb= {
    sname :'김',
    age : 34,
    changeAge : function(){
        this.age++;
    }

}

let cloneObj = orginOb;

cloneObj.sname = 'kim'

console.log('orgin : '+orginOb.sname)

orginOb.changeAge();
console.log('orgin : '+orginOb.age)

let obj2 =new Object();

let copyObj=Object.assign({},orginOb);

console.log('copy : '+copyObj.sname)
copyObj.sname = '김'
console.log('copy : '+copyObj.sname)

let newObj = {
    sname : 'lee',
    phone : '010-2587-7897',
    age : 30

}

let dupObj=Object.assign(newObj , copyObj)

console.log(dupObj)


let s1  = {
    sname : 'park'
}

s1.age = 10 ;
s1['phone']= '1111-111'
s1.friends = [
    {name:'이주훈', phone :'123-456-789',age:30},
    {name:'이현성', phone :'789-456-123',age:28,hobby : ['헬스','공부','운동']}
]

console.log(s1.friends[1].hobby)

class student {
    constructor(sname ,age){
        this.sname = sname;
        this.age = age;

    }
}

let s2 =new student('남순탁쓰',31)
// Object.defineProperty(s2, 'score', {
//     set: function (score) {
//         if (score > 100) {
//             throw '잘못된 값을 입력했습니다. (100보다 작은 값)'
//         } else if (score < 0) {
//             throw '잘못된 값을 입력했습니다. (0보다 큰 값)'
//         } else {
//             this._score = score;
//         }
//     },
//     get: function () {
//         return this._score;
//     }
// });

Object.defineProperty(s2, 'score',{
    set: function (score) {
                if (score > 100) {
                    throw '잘못된 값을 입력했습니다. (100보다 작은 값)'
                } else if (score < 0) {
                    throw '잘못된 값을 입력했습니다. (0보다 큰 값)'
                } else {
                    this._score = score;
                }
            },
            get: function () {
                        return this._score;
                    }
});



s2.score = 111;

console.log(s2.score)

let s3 = new student('최승현',27)

student.prototype.showInfo=function(){
    return `이름은 ${this.sname}이고 나이는 ${this.age}입니다.`;
}
console.log(s2.showInfo())
console.log(s3.showInfo())

