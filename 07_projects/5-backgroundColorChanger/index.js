function getRandom(){
return (Math.ceil(Math.random()*255+1))
}

document.getElementById('start').addEventListener("click",function(){
  const changeColor=setInterval(function(){
    document.body.style.backgroundColor = `rgb(${getRandom()},${getRandom()},${getRandom()})`;
  },1000)

  document.getElementById('stop').addEventListener("click",function(){
    console.log("stopped")
    clearInterval(changeColor)
  })
  
 
})

