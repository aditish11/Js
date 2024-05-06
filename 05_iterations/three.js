// for of loop

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4]
for (const num of arr) {
    // console.log(num)
}

const greetings="Hello world"
for (const greet of greetings) {
    // console.log(`Char of greetings is ${greet}`)
}

const map = new Map()
map.set("IN", "INDIA")
map.set("US","United States")
map.set("FR","France")
// console.log(map)
for (const [key,value] of map) {
    // console.log(key ,"--",value)
}

const obj={
    game1:"ludo",
    game2:"carrom"
}
// for (const [key,value] of obj) {
//     console.log(key ,"--",value)
// }
//this will not work , it will give error that ...obj is not iterable


