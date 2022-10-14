// MAP

let M=[1,2,3,4,5];
let Ans1=M.map(Map);
console.log(Ans1);
function Map(map){
    return map*2
}

// FILTER

let F=[1,2,3,4,5];
let Ans2=F.filter(fill);
console.log(Ans2);
function fill(fill){
       return fill > 4
}

// SOME

let S=[1,2,3,4,5];
let Ans3=S.some(some);
console.log(Ans3);
function some(some){
    return some === 2
}

// REDUCE

let R=[1,2,9,4,5];
let Ans4=R.reduce(red);
console.log(Ans4);
function red(red,blue) {
    return red > blue?red:blue;
}

// FIND

let Find=[1,2,3,4,5];
let Ans5=Find.find(find);
console.log(Ans5);
function find(find){
  return find === 4
}