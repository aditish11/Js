//Creating Promise
const promiseOne =new Promise(function(resolve, reject){
  //Do an async task
  //like DB calls, cryptography, network
  setTimeout(function(){
    // console.log("Async task completed");
    //we need to write resolve() here then only it can be consumed
    resolve()
  },1000)
})

//Resolve is connected to then
promiseOne.then(function(){
  // console.log("Promise consumed");
})


//Alternate way, not necessary to name it
new Promise(function(resolve,reject){
  setTimeout(function(){
    // console.log("Async task2")
  },1000)
}).then(function(){
  // console.log("Async 2 resolved")
})


////////Passing values
const promiseThree= new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"Ram",email:"Ram@example.com"})
  },1000)
})

promiseThree.then(function(user){
// console.log(user)
})

/////////
const promiseFour=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true
    if(!error){
      resolve({username:"Ram", password:"123"})
    }else{
      reject('ERROR: Something went wrong')
    }
  },1000)
})

promiseFour
.then((user)=>{
  // console.log(user)
  return user.username
}).then((username)=>{
  // console.log(username)
}).catch(function(err){
  // console.log(err)
}).finally(()=>{
  // console.log("Promise accepted or rejected")
})

//////////////////////
const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive(){
  try {
     const response = await promiseFive;
    //  console.log(response);
  } catch (error) {
    // console.log(error)
  }
 
}
consumePromiseFive()

/////////////////
// async function getAllUsers(){
// try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response)
//   const data =  await response.json();//it also takes time, so we need to await

//   console.log(data);
// } catch (error) {
//   console.log(error)
// }
// }
// getAllUsers()


///////////
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((data)=>{console.log(data)})
.catch((err)=>console.log(err));

