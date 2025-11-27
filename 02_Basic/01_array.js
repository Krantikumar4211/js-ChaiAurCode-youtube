const myArr = [0,1,2,3,4,5,6];
const myHero = ["KK","Kranti"];

// console.log(myArr[1]);

//Array Method

myArr.push(122);
// console.log(myArr);

myArr.push(12);
// console.log(myArr);

myArr.pop(); //delete the last element
// console.log(myArr);

myArr.unshift(9); //add from front
// console.log(myArr);

myArr.shift(); //remove from front
// console.log(myArr);

// console.log(myArr.includes(9)); //check the value present or not
// console.log(myArr.indexOf(6));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice interview IMP

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log("B ",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);

//diff slice, splice methods
// slice() =>  after Apply this method orignal arra as seen line 35-36 output 
// splice() => after use this method remove the oragnal arra data from after use the seen line 39-40 output 