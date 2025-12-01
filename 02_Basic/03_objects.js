// Singleton
// Object.create()

const mySym = Symbol("key1");

// Object literal
const JsUser = {
    name: "Kranti",
    "full Name": "Krantikumar Patil",
    [mySym]: "mykey1",   // ✔ Correct way to use Symbol as a key
    age: 22,
    location: "Pune",
    email: "krantikumar4211@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);     // dot notation
// console.log(JsUser["email"]);  // bracket notation
// console.log(JsUser["full Name"]); // bracket required for space

// console.log(typeof JsUser[mySym]); // ✔ Symbol key value
// console.log(JsUser[mySym]); // accessing value stored using Symbol

JsUser.email ="kk4211@gmail.com"
// Object.freeze(JsUser);//freeze use for next time not changing this Obj
JsUser.email ="krantikumar4211@gmail.com" //not work also not any error
// console.log(JsUser);

JsUser.greeting = function()
{
    console.log(`Hello JS user`);
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user ${this.name}`);
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

