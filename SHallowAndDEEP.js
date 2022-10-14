// SHALLOW COPY

let a = [1,2,3];
let Sh = a;
   Sh[0] = 7
console.log(a,Sh);


// DEEP COPY USING SPREAD (sprad give clone)

let Sp = [1,2,3,4];
let SPread = [...Sp];
SPread[0] = 9;
console.log(Sp,SPread);

// REST 

