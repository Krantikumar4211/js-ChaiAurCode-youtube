//Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate)); //date is Obj

// let myCreatedDate = new Date(2002, 10, 14);//jan start form 0
// let myCreatedDate = new Date(2002, 10, 14, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());

let myTimeSpamp = Date.now();
// console.log(myTimeSpamp); //MiliSecond ans
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //ms into sec

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
console.log(newDate.getHours());

//string interpolation
// `${newDate.getDate()} and the Time`

newDate.toLocaleString('default',{
    weekday:"long"
})







