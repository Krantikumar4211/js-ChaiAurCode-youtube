// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 693478617687282n

// Reference(non primitive)

//Array, Objects, Functions

const heroes =["Shaktiman","naagraj","doga"];

let myObj=
{
    name:"JJ",
    Age:23
}

const myFunction =function() {
    console.log("Hello Word");    
}

// console.log(typeof myFunction);


//Memory  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "krantipatildotcom"

//Stack (Primitive)
// here primitive values going to stack and allways if you taken inside the stack then there only copy get and edit 
let anothername = myYoutubename
anothername ="KK"

console.log(myYoutubename);
console.log(anothername);


//Heap (Non-Primitive)
// if taken non-primitive then get referance 
let userOne ={
    email: "kranti@google.com",
    upi:"user@ybe"
}

let userTwo = userOne

userTwo.email = "kranti4211@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




