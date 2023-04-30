let content = document.querySelector("#content");
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let addBtn = document.querySelector("#addBtn");
let subsBtn = document.querySelector("#subsBtn");
let multiBtn = document.querySelector("#multiBtn");
let divisBtn = document.querySelector("#divisBtn");
let resetBtn = document.querySelector("#resetBtn");

addBtn.addEventListener("click", function () {
  if (value1.value === "" || value2.value === "") {
    alert("please fill in the value lines");
  } else {
    content.innerText = +value1.value + +value2.value;
  }
});
subsBtn.addEventListener("click", function () {
  if (value1.value === "" || value2.value === "") {
    alert("please fill in the value lines");
  } else {
    content.innerText = +value1.value - +value2.value;
  }
});
multiBtn.addEventListener("click", function () {
  if (value1.value === "" || value2.value === "") {
    alert("please fill in the value lines");
  } else {
    content.innerText = +value1.value * +value2.value;
  }
});
divisBtn.addEventListener("click", function () {
  if (value1.value === "" || value2.value === "") {
    alert("please fill in the value lines");
  } else {
    content.innerText = +value1.value / +value2.value;
  }
});
resetBtn.addEventListener("click", function () {
  content.innerText = 0;
  value1.value = "";
  value2.value = "";
});
