let MOCK_URL=`http://localhost:8300/Users`
let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let submitBtn=document.querySelector("#edit")
let id = new URLSearchParams(window.location.search).get("id");
const user = JSON.parse(localStorage.getItem("editUser"));


allInputs[0].value = user.name;
allInputs[1].value = user.email;
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
    await fetch(`${MOCK_URL}/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: allInputs[0].value,
        email: allInputs[1].value,
      }),
    });
  } catch (error) {
    console.log(error);
  }
  window.location.href = "./index.html";
});
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

  