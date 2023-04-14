////////////////////////////////////////////////////// test-1////////////////////////////////////
function getFirstValue(arr1) {
  return arr1[0];
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));





/////////////////////////////////////////////////////////   test-2    //////////////////////////////////////
function getLastItem(arr2) {
  return arr2[arr2.length-1];
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["Cat", "dog", "duck"]));
console.log(getLastItem(["true", "false", "true"]));







///////////////////////////////////////////////////////   test-3//////////////////////////////////////////////











/////////////////////////////////////////////// test-4////////////////////////////
function addition(num1,num2){
  let sum=num1+num2
  return sum

}
console.log(addition(2,3));
console.log(addition(-3,-6));
console.log(addition(7,3));












// ////////////////////////////////////////////test-5///////////////
let lessThan100 = (num1,num2) => {
  let sum=num1+num2
return sum<100
}
console.log(lessThan100(22,15));
console.log(lessThan100(83,34));
console.log(lessThan100(3,77));




////////////////////////////////////////////// test-6///////////////////







// /////////////////////////////////test-7//////////////////////////////////
function points(twoPointers, threePointers){
  let sumPointers=twoPointers*2+threePointers*3
  return sumPointers
}
console.log(points(1,1));
console.log(points(7,5));
console.log(points(38,8));






////////////////////////////////////////////// test-8///////////////////////////////

const arr8 = [
  {
    name: "Raul",
    surname: "Shukurov",
    city: "Ağcabədi"
  },

  {
    name: "Raul",
    surname: "Shukurov",
    city: "Ağcabədi"
  },

  {
    name: "Raul",
    surname: "Shukurov",
    city: "Ağcabədi"
  },
];
let fillInfo = function () {
  for (let item of arr8) {
    item.name = "Tony",
    item.surname = "Stark",
    item.city = "Hollywood"
  }
  return arr8;
};
console.log(fillInfo());
