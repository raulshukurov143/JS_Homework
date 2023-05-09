let row=document.querySelector("#row");

function createCard() {
    row.innerHTML = "";
    fetch(" http://localhost:8800/Users")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        let card=document.createElement("div");
        card.innerHTML += `<div class="col col-5  bg-secondary my-3">
        <div class="box  d-flex justify-content-between align-items-center">
          <div>
            <h3>${element.Name}</h3>
            <h5>${element.Email}</h5>
          </div>
          <div>
            <i class="fa-solid fa-pen fa-beat text-success" ></i>
            <i class="fa-solid fa-trash-can fa-beat text-danger"></i>
          </div>
        </div>
      </div>
     `
      row.append(card)
  
    }))
  }
 createCard()