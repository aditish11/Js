function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

//function can also be treated as object
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};


// const chai =  createUser("chai", 25); This will give the below error
// TypeError: Cannot read properties of undefined (reading 'printMe') 
// So, we must use the new keyword

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
