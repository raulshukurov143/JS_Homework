// ------// test-1//--------//

function myAge(Age) {
  return Age * 365;
}
let ageRaul=myAge(65);
let ageJohn=myAge(0);
let ageTony=myAge(20);
console.log(ageRaul);
console.log(ageJohn);
console.log(ageTony);



// -----// test-2//-----//
// let myWork="Front-end Developer"





// -------// test-3//-------//

let Number=0;
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    Number +=i;
  }
}
console.log(`Number:${Number}`);






// -----// test-4//-----//

let Num = 1;
for (let i = 1; i < 17; i++) {
  if (i % 2 != 0) {
    Num *= i;
  }
}
console.log(`Num:${Num}`);




// -----// test-4-2//-----//

let Mul = 10;
for (let i = 10; i <= 18; i++) {
  Mul *= i;
}
console.log(`Mul:${Mul}`);





// -------// test-5//------//
let Sum = 0;
for (let i = 17; i <= 30; i++) {
  if (i == 19 || i == 20) continue;
  Sum += i;
}
console.log(`Sum :${Sum}`);



// ------//test-6//------//



// -----// test-7//-----//
let Power = 0;
for (let i = 0; i <= 16; i++) {
  if (i % 2 == 0) {
    Power = i ** 2;
  }
}
console.log(`Power:${Power}`);
