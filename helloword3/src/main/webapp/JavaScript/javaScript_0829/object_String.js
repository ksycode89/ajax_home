
class student {
    constructor(sno, name){
        this.sno=sno;
        this.name=name;
    }
    setGrade(grade){
        this.grade=grade;
    }

    showInfo(){
       return  `이름은 :  ${this.name}, 학번은 : ${this.sno}입니다. `
    }

}

let s1 = new student('s22','김상영');
console.log(s1.sno)
s1.setGrade(5);
console.log(s1.grade)

let s2 = new student('s21','이주훈');
s2.setGrade(6);

s2.phone='010-1234-5678';
delete s2.phone;


const students  = [s1,s2 ,new student('s20','이현성')];
students[2].setGrade(7);
students.forEach(student => console.log(student.showInfo()+`학년은 : ${student.grade} , 연락처는 : ${student.phone}`))