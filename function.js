// Normal Function

function normal(){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
normal(1,2,3,4,5,6);

// Arrow Function

let First = (...arrow)=>{
    for(let i=0;i<arrow.length;i++){
        console.log(arrow[i]);
    }
}
First(100,200,300,400);

let Second = Name =>{
    console.log(Name);
}
Second("Simeon");

let Third = Third => console.log("Nice to Meet "+ Third);
Third("You Simeon");


// CALL BACK FUNCTION 

function CallBack(GET){
    console.log("First CallBack Function");
    GET();
}
function CallBack1(){
   console.log("Second CallBack Function");
}
CallBack(CallBack1);



// CALL BACK HELL FUNCTION

function CallBackHell(FUN,Total){
    const Number = 50;
    let Tot = Number + Total;
    FUN(Tot);
}
function CallBackHell1(Value){
   const Number = 30;
    let Total = Number + Value;
    CallBackHell(CallBackHell2,Total)
}

function CallBackHell2(Tot){
   console.log(Tot);
}
CallBackHell1(20);

