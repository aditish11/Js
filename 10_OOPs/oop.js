////Object Literal
const user={
  userName:"Ram",
  loginCount:8,
  signedIn:true,

  getUserDetails: function(){
    // return ("Got user details from database");
    // return `Username: ${this.userName}`
    // console.log(this)
    return this
  }
}
console.log(user.getUserDetails())

/////Constructor function
//It allows to create multiple instances with one object literal

function getUsers(userName, loginCount,signedIn){
this.userName=userName
this.loginCount=loginCount
this.signedIn=signedIn
return this
}

// const userOne=getUsers("Ram",5,true)
// console.log(userOne)
// const userTwo=getUsers("Krishna",8, false)
// /////by this way userTwo will overwrite userOne values
// console.log(userOne)


//so we must use NEW Keyword
const userOne = new getUsers("Ram", 5, true);
console.log(userOne);
const userTwo = new getUsers("Krishna", 8, false);
/////by this way userTwo will overwrite userOne values
console.log(userTwo);
//When we use new keyword, first of all empty object is created, which is called instance
//Then, constructor function is called with new keyword
//Then, values are assigned by function


function getUsers2(userName, loginCount, signedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  //we can add functions also
this.greeting=function(){
    console.log(`Welcome ${this.userName}`)
}


  // return this;
}

const userA=new getUsers2("Ram", 5, true);
console.log(userA.constructor);
const userB = new getUsers2("Krishna", 8, false);
/////by this way userTwo will overwrite userOne values
console.log(userB);