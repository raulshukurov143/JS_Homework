let form=document.querySelector("#formId")
let submit=document.querySelector(".btn-primary")
let nameInput=document.querySelector("#name")
let emailInput=document.querySelector("#email")
submit.setAttribute("disabled",null)
submit.disabled=true

 function  submitDisabled(){
  if(nameInput.value && emailInput.value){
        submit.disabled=false
    }else{
        submit.disabled=true
    }
 }
 submitDisabled()

 function submitCard(){
    submit.addEventListener("click",function(){
        
    })
    
 }
