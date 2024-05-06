// const userEmail=[]
const userEmail=""

if(userEmail){
    console.log("User has an email")
}else{
    console.log("User does not have an email")
}


//falsy values: 0, -0,BigInt 0n, "", null, undefind, Nan
//Except this , all values are true

const Arr=[]
if(Arr.length==0){
    console.log("Empty array")
}

const Obj={}
if(Object.keys(Obj).length==0){
    console.log("Empty object")
}


//NULLISH COALESCING OPERATOR (??) //for null and undefined check

let val1;
// val1=5 ?? 10
val1= null ?? 3
// val1= undefined ?? 2

console.log(val1)

//TERNARY OPERATOR 
// condition ? true: false

const teaPrice=100
teaPrice<=80?(console.log("less than 80")):console.log("Greater than 80")

