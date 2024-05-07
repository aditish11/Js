//****************FILTER METHOD**********************//

// const coding=["js","cpp", "python", "ruby","java"]

// const values=coding.forEach( function(item){
//     // console.log(item);
//     return item
// })
// console.log(values)
// //so for each is not returning anything



const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>num>4)

// const newNums=myNums.filter((num)=>{
//    return  num>4
// })//here we are using { },so it is compulsory to use return keyword

// const newNums=[]
// myNums.forEach(element => {
//     if(element>4)
//         newNums.push(element)
// });


// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks=books.filter((b)=>b.genre=="History")
userBooks=books.filter((b)=>(b.publish>=1990 && b.genre=="History"))
console.log(userBooks)