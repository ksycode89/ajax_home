
function table(a){
    this.member = a;
    this.addMember = function(member){

    }
    this.showList = function(){

    }
}

let t1 = new table([{id,name,age},{id,name,age},{id,name,age}])

t1.addMember({});
let str = t1.showList();
document.write(str);