//////////////////1. Concatenate the following two variables and store it in a "fullStack" variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = [frontEnd.concat(backEnd)];
console.log(fullStack);



////////////////2. Find the average age
// 2.1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
function findAverage(array) {
  let sum = 0;
  let ave = 0;
  array.forEach((el) => (ave = (sum += el) / ages.length));
  return ave;
}
console.log(findAverage(ages));
// 2.2
function findAverage() {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
  }
  let ave = sum / ages.length;
  return ave;
}
console.log(findAverage());





//////////////////////3. Using countries array console.log following result://///////

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let selectedCountries=countries.map((el,i,arr)=>{
  return `${i}. ${el.slice(0,3).toLocaleUpperCase()}`;

})
console.log(selectedCountries);




///////////////////////////4.Find the sum of all indexes of 7.////////
let numbers = [
  5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5,
  6,
];
console.log(numbers.indexOf(7));




//////////////////////////5. Using todos array find all objects that completed property is "true".///////
const todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
];
console.log(todos.filter((item) => item.completed == true));





///////////////////6. Using todos array find all objects that title property length is grater than 40.

console.log(todos.filter((item) => item.title.length > 40));
