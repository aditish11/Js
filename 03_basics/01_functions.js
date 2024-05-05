

function sayMyName(){
    console.log("Hello")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){
  let result=number1+number2
  return result
}
const result=addTwoNumbers(3,4)
// console.log("Result: ", result)

// function loginUserMsg(userName){
//     return `${userName} just logged in!`
// }

// console.log(loginUserMsg("Harry"))
// console.log(loginUserMsg())//undefined just logged in

function loginUserMsg(userName){
    if (!userName){
        console.log("Please enter a username")
        return
    }else
    return `${userName} just logged in!`
}
// console.log(loginUserMsg())


//when number of parameters is not known , use REST operator ...num
function calculateCartPrice(val1,val2,...num1){
return num1
}

// console.log(calculateCartPrice(200,3,44))

const user={
    userName:"Harry",
    price:999
}

function handleObject(anyObject){

    console.log(`User name is ${anyObject.userName} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    userName:"Ram",
    price:9999
})

//passing array into functions

const myNewArray=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([400,100,300,500]))