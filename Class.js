// CLASS Like More Funtion 

// First PURpose OBJECT CREATION 
// Second PURpose FOr Inheritiences 

// Constructor Function 

function User(){
    this.name = "simeon"
}
let user = new User();
console.log(user.name);


// CLASS  using Constructor keyword

class Class{
    constructor(){
       this.Age = 22;
    }
}
let Person = new Class();
console.log(Person.Age);


// Calling one Class to Another Class 

class Info{
   constructor(){
    this.style = "Perfect"
   }
   clean(){
    return this.style;
   }
}

class Super extends Info {
    constructor(){
        super();
    }
}
let Call = new Super();
console.log(Call.style);
