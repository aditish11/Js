const element=document.querySelector('#clock')


const t=new Date()

//////setInterval method
////// it controls that after how much time , it sould be executed automatically again

setInterval(function(){
  let date=new Date();

  element.innerHTML=date.toLocaleTimeString();
},1000)
