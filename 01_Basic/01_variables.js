const accountId = 1274645
let accountEmail = "krantikumar4211@gmail.com"
var accountPassword ="123456"
accountCity = "Pune"

console.log();
console.table([accountId,accountEmail,accountPassword,accountCity]);


// accountId =1212; //const not allow to modefy
console.log(accountId);

accountEmail = "patil@gamil.com";
accountPassword = 46473;
accountCity = "Bengaluru"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope 
*/