const coding=["js","ruby","python","java"]

// coding.forEach( function (item){
//     console.log(item)
// })



// coding.forEach((item)=>{
//     console.log(item)
// })



// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach(function(item,index, arr){
//     console.log(item, index, arr);
// })


const myCoding=[
    {
        langName:"javascript",
        languageNotation:"js"
    }, {
        langName:"C++",
        languageNotation:"cpp"
    }, {
        langName:"python",
        languageNotation:"py"
    }, {
        langName:"golang",
        languageNotation:"go"
    }
]

myCoding.forEach(function(item){
    console.log(item.langName)
})