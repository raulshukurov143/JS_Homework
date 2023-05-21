let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let submitBtn=document.querySelector("#submit")


let id = new URLSearchParams(window.location.search).get("id");

function check() {
    if (allInputs[0].value && allInputs[1].value) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "");
    }
  }
  check();
  allInputs[0].addEventListener("input", function () {
    check();
  });
  allInputs[1].addEventListener("input", function () {
    check();
  });
form.addEventListener("submit",function(e){
    e.preventDefault();
    let obj={
        name:allInputs[0].value,
        email:allInputs[1].value
    };
    fetch(`http://localhost:8300/Users`,{
        method:"POST",
        headers:{
            "Content-type":"application/json",
        
        },
        body: JSON.stringify(obj)

    })
    window.location.href=`./index.html`

})
