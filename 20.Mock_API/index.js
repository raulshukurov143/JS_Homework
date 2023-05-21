let row = document.querySelector(".row");
let addBtn=document.querySelector("#Add")
// let BASE_JSON = ` http://localhost:8300/Users`;

async function createCard(arr) {
 
 
  row.innerHTML = ``;
  arr.forEach(element => {
    row.innerHTML+=` <span>
    <div class="col col-5 d-flex justify-content-between align-items-center bg-secondary mx-3 my-3 p-3">
        <div class="content"><h2>${element.name}</h2>
            <h4>${element.email}</h4></div>
            <div class="icon">
                <i class="fa-solid fa-pen text-success" onclick=editCard("${element.id}","${element.name}","${element.email}") id="${element.id}"></i>
                <i class="fa-solid fa-trash-can text-danger" id=${element.id} onclick=deleteFun(${element.id},this)></i>
            </div>

    </div>
</span>`
    
  });
}
axios(`http://localhost:8300/Users`).then((res)=>{
    createCard(res.data)
})

async function deleteFun(id,btn){
await axios.delete(`http://localhost:8300/Users/${id}`);
btn.closest("span").remove()

   
    
}
addBtn.addEventListener("click",function(){
    window.location.href=`./AddUser.html`
})


async function editCard(id,name,email){
    let user={id,name,email}
    localStorage.setItem("editUSer",JSON.stringify(user))
        
        window.location.href="./editUser.html"
    }
 
