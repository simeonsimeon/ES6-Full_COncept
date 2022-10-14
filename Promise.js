// PROMISE (Basic Promise)

function FIrstProMise(){
    return new Promise((Resolve,Reject)=>{
        Resolve("FIrst")
    })
}
function SecondProMise(){
    return new Promise((Resolve,Reject)=>{
        Resolve("Second")
    })
}
FIrstProMise().then((A)=>{
    console.log(A,"Success");
}).catch((a)=>{
    console.log(a,"Error");
})
SecondProMise().then((A)=>{
    console.log(A,"Success");
}).catch((a)=>{
    console.log(a,"Error");
})

// PROMISE NEXT LEVEL USING SETTIMEOUT  

function FI(){
    return new Promise((R,RJ)=>{
        setTimeout(()=>{
            R()
            console.log("First");
        },3000)
    })
}
function SE(){
    return new Promise((R,RJ)=>{
        setTimeout(()=>{
            R()
            console.log("Second");
        },1000)
    })
}
FI(); //(This is a first Function but give Not answer because this function have use settimeout more than SE function)
SE();


// PROMISE STEP AND STEP


function FIR(){
    return new Promise((R,RJ)=>{
        setTimeout(()=>{
            R("correct-First")
        },1000)
    })
}
function SED(){
    return new Promise((R,RJ)=>{
        setTimeout(()=>{
            R("correct-Second")
        },1000)
    })
}
FIR().then((A)=>{
    console.log(A)
    SED().then((A)=>{
        console.log(A)
    }).catch(()=>{
        console.log("ERROR")
    })
}).catch(()=>{
    console.log("ERROR")
});


// PROMISE ALL 

let p1=function all1(){
    return new Promise((R,RJ)=>{
        R();
    })
}
let p2=function all2(){
    return new Promise((R,RJ)=>{
        R();
    })
}
let p3=function all3(){
    return new Promise((R,RJ)=>{
        R();
    })
}

Promise.all(p1,p2,p3).then(()=>{
    console.log("PERFECT")
}).catch(()=>{console.log("PERFECT ERROR");})


// ASYNC AWAIT


function ASy(a){
    return new Promise((R,RJ)=>{
        setTimeout(()=>{
            R();
            console.log(a);
        })
       
    })
}
function ASy2(a){
    return new Promise((R,RJ)=>{
        setTimeout(()=>{
            R();
            console.log(a);
        })
       
    })
}
async function whole(){
    try{
        await ASy(10);
        await ASy2(20);
    }
    catch{
        console.log("error");
    }
   
}
whole()
