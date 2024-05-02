// let myDate= new Date()

// // console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// // console.log(myDate.toLocaleDateString());
// // console.log(myDate.toLocaleString());

// // console.log(typeof myDate);//object

// let myCreatedDate= new Date(2024,28,5);
// let myCreatedDate= new Date("03/21/2021")
// console.log(myCreatedDate.toDateString());

let myTimeStamp= Date.now()

let newDate= new Date();

newDate.toLocaleDateString('default',{
    weekday:"long",
    month:"long"
})
console.log(newDate);