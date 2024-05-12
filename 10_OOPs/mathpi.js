const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)
// console.log(Math.PI)
// Math.PI=7


const chai={
  name:"ginger chai",
  price:200,
  isAvailable:true,
  sayHello: function(){
    console.log('Hello')
  }
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,"name",{
  writable:false,
  enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,val] of Object.entries(chai)) {
  if(typeof val !== 'function')
  console.log(`${key} : ${val}`)
}
