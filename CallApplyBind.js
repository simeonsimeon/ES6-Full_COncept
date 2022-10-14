// BIND 

function Myfun(){
    console.log(this.Age);
}
let obj = {
    N : "Simeon",
    Age : 22
}
let b = Myfun.bind(obj);
Myfun = b
Myfun();

// CAll 

function Myfun2(a,b){
    console.log(a+b+" "+this.AGe);
}
let obj2 = {
    N : "Simeon",
    AGe : 22
}
Myfun2.call(obj2,2,3);


// APPLY 



