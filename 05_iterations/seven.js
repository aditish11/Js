///*****************MAP METHOD****************///
//for doing changes in each element

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map((num)=>{ return num+10})
// console.log(newNums)


///***CHAINING*****////
const newNums=myNumbers
.map((num)=>(num*10))
.map((num)=>(num+3))
.filter((num)=>(num>30))
console.log(newNums)