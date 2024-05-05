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
// const addTwo =(num1, num2) => ({username:"Harry"})
console.log(addTwo(2,3));