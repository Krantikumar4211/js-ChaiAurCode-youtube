const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8989;
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3)); //IMP for Interview

const hundreds = 100000
// console.log(hundreds.toLocaleString());//convert into US measurements
// console.log(hundreds.toExponential('en-IN')); // convert into Ind 


// ============================ Maths =================================

// console.log(Math);

// console.log(Math.abs(-4)); //Only -ve convert into +ve (+ve => -ve not )
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6)); //ceil -> top
// console.log(Math.floor(4.6)); //floor -> less
// console.log(Math.min(4,6,6,3));

//Most Use
console.log(Math.random()); //given value between 0-1 between
// console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

Math.random();
// Correct final statement — random number between min & max
console.log(Math.floor(Math.random() * (max - min + 1)) + min);




