const accountId = 11111;
let accountEmail = "abcd@google.com"
var  accountPassword="abcd";
accountCity="Mumbai";
let accountState;

accountEmail="ab@ab.com";
accountPassword="qwer";
accountCity="Kolkata";
// console.log(accountId);
/*
Prefer not to use var because of issues in block scope and functional scope.
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);