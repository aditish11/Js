var c=3000

if(true){
let a=10
const b=20
 c=30
}

// console.log(a) 
// console.log(b)
// a and b will be undefined
console.log(c)//// but c will be printed so this is a problem


function one(){
    const userName="Harry"

    function two(){
        const website="youtube"
        console.log(userName)
    }

    // console.log(website)
    two()
}
// one()



//////++++++++++Interesting++++++++++++////////
console.log(addOne(5))

function addOne(value){
    return value+1
}
addOne(5)


addTwo(5)
const addTwo=function(value){
    return value+2
}
addTwo(5)
