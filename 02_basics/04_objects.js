// const tinderUser= new Object()//singleton object
const tinderUser={} // non singleton object

tinderUser.id=123
tinderUser.name="harry"
tinderUser.isLogin=false

// console.log(tinderUser);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1, obj2} 
// const obj3=Object.assign({},obj1, obj2);
const obj3={...obj1,...obj2}
// console.log(obj3)

const users=[
    {id:1,
        mail:"a@gmail.com"
    },
    {id:2,
        mail:"c@gmail.com"
    },
    {id:3,
        mail:"d@gmail.com"
    }
]

// console.log(users[1].mail)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("name"))