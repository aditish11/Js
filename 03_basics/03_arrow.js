const user={
    username:"Harry",
    price: 999,
    welcomeMessage:function(){
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Sam"//here we have changed the context or values of the user
// user.welcomeMessage()

//console.log(this)/////output={}


// function code(){
//     let user="Harry"
//     console.log(this.username)
// }
// code()//output - undefined

// const code=function(){
//     let user="Harry"
//     console.log(this.user)
// }
// code()//output - undefined

// const code=()=>{
//     let user="Sam"
//     console.log(this.user)
// }
// code()


// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

// const addTwo =(num1,num2) => (num1+num2)
const addTwo =(num1, num2) => ({username:"Harry"})
console.log(addTwo(2,3));

const person = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills() {
      this.skills.forEach(function (skill) {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person.showSkills();
  //However, inside functions like the one used in forEach(), this refers to the global object (e.g., Window in a browser) by default, unless the function is called with a specific context using methods like bind(), call(), or apply().

  const person2 = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills() {
      this.skills.forEach(skill => {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person2.showSkills();

  /**
   * Arrow functions, on the other hand, do not have their own this binding. Instead, they inherit the this value from the enclosing lexical scope. In simpler terms, the this inside an arrow function is determined by where the arrow function is defined, not where it is called.
In your example, using an arrow function inside forEach() in showSkills() allows this to refer to the person object because the arrow function is defined within the showSkills() method of person.
   */

// const person3 = {
//     name: 'Nathan',
//     skills: ['HTML', 'CSS', 'JavaScript'],
  
//     showSkills:()=>  {
//       this.skills.forEach(skill => {
//         console.log(`${this.name} is skilled in ${skill}`);
//       });
//     }
// };
  
// person3.showSkills();