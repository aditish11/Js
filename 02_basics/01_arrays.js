const myArr=[0,1,2,3,4,5];
const heros=["abcd","qwert","asdf"];
const myArr2= new Array(1,2,3,4);

//js arrays are resizeable and can contain mix data types
//js array-copy operations create shallow copies(same reference point)

//Array methods

// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3))

// console.log(myArr.join());

//slice , splice
// splice includes the last range and manipulates the original array
const a1=myArr.slice(1,3);
console.log(a1);
console.log(myArr);
const a2=myArr.splice(1,3);
console.log(a2);
console.log(myArr);

