const form=document.querySelector('form')

// const height = parseInt(document.querySelector("#height").value);
// const weight = parseInt(document.querySelector("#weight").value);
//THIS WILL GIVE YOU EMPTY VALUES


console.log(height, weight, "1");
form.addEventListener('submit', function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector("#weight").value);
  const result=document.querySelector('#results')

  if(height==="" || height==0 || isNaN(height)){
    result.innerHTML="Please give a valid data";
  } else if ((weight === "" || weight == 0 || isNaN(weight))) {
      result.innerHTML = "Please give a valid data";
    }else{
      result.innerHTML=(weight/((height*height)/10000)).toFixed(2);
    }
  
})