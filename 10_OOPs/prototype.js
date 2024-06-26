// const name="abcd      "

// console.log(name.trim().length)

let myHeros=["thor","spiderman"]

let heroPower={
  thor:"hammer",
  spiderman:"sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`)
  }
}

Object.prototype.myName=function(){
  console.log("This is my name , it is in all objects.")
}

Array.prototype.yourName=function(){
  console.log("This is your name")
}

// heroPower.myName()
// myHeros.myName()//even arrays are objects.

myHeros.yourName()//We have injected func into Arrays
// heroPower.yourName() //Not for objects


/// INHERITANCE

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
