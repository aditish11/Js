/////*******REDUCE METHOD********/
// The reduce() method in JavaScript is used to reduce an array to a single value. It takes two parameters: an accumulator and the current element of an array. Its uses include calculating the sum or product of all elements, finding the maximum and minimum value, flattening an array, and more.

const myNums=[1,2,3]

//  const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(acc,currVal)
//     return acc+currVal
//  },0)
//here we have initialised accumulator with 0 value

const myTotal=myNums.reduce((acc,currVal)=>(acc+currVal),0) 
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"cpp course",
        price:1999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"java course",
        price:2999
    },
]

const totalPrice=shoppingCart.reduce((acc,currVal)=>(acc+currVal.price),0)
console.log(totalPrice)
