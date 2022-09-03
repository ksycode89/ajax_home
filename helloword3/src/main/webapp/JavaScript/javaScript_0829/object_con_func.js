



function student(sno,sname){
    this.sno = sno;
    this.sname=sname;

    this.showInfo= function(){
        return `학번은 ${this.sno}, 이름은 ${this.sname}입니다.`
    }
}

let s1 = new student('s22','김상영');

console.log(s1.showInfo())
