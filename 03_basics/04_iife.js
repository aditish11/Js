//Immediately Invoked Function Expressions(IIFE)

(function connection(){
    console.log("DB connected")
})();

(function hello(){
    console.log("DB connectd two")
})();

((name)=>{console.log(`DB connected three ${name}`)})("Ram")

