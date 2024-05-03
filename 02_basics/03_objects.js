//singleton
//object.create



const mySym=Symbol("key1");
//object literals
const JsUser={
    name:"Harry",
    "full name":"Harry Potter",
    age:18,
    [mySym]:"myKey1",//corect syntax for symbols
    location:"London",
    email:"harry@google.com"

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//corect syntax for symbols

JsUser.email="potter@google.com"

//freeze for no changes
// Object.freeze(JsUser);
JsUser.email="abcd.com"
// console.log(JsUser)


//to associate functions with object
JsUser.greetings=function(){
    console.log("Hello user")
}

JsUser.greetingsTwo=function(){
    console.log(`Hello user ${this["full name"]}`)
}
console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())