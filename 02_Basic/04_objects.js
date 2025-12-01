// const tinderUser = new Object() //SingleTon Obj
const tinderUser = {}   //non SingleTon Obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLogged = false

// console.log(tinderUser);

const regularUser = {
    email:"kk4211@gmail.com",
    fullName: {
        userfullname:{
            firstName:"Krantikumar",
            lastName:"Patil"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname);
// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);