// const numbers = [1, 2, 3, -2, 3, -1];
// //working with filter,map methods

// const items = numbers
//   .filter((n) => n >= 0)
//   .map((n) => ({ value: n }))
//   .filter((obj) => obj.value > 1);
// console.log(items);

// //using the reduce method to het sum of all numbers in an array
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// //using the sort method to sort numbers
// //a-b sorts numbers in ascending order
// numbers.sort(compareFunction);
// console.log(numbers);

// function compareFunction(a, b) {
//   return a - b;
// }

const list = document.querySelector(".list");

const sort_name_btn = document.querySelector(".sort-options .sort-name");
const sort_meta_btn = document.querySelector(".sort-options .sort-meta");
const sort_age_btn = document.querySelector(".sort-options .sort-age");

let list_items = [
  { name: "Batman", meta: "Black", age: 57 },
  { name: "Superman", meta: "Red &Blue", age: 32 },
  { name: "Wonder Woman", meta: "Gold,Red &Blue", age: 34 },
  { name: "The Flash", meta: "Red & Yellow", age: 24 },
  { name: "Cyborg", meta: "Silver", age: 28 },
];

const displayList =(items)=>{

}

//function to display items
// function displayList(array = []) {
//   // list.innerHTML = "";
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];

//     let item_element = document.createElement("div");
//     item_element.classList.add("list-item");

//     let title = document.createElement("div");
//     title.classList.add("item-title");
//     title.innerText = item.name;

//     item_element.appendChild(title);

//     let meta = document.createElement("div");
//     title.classList.add("item-meta");
//     title.innerText = item.meta;

//     item_element.appendChild(meta);

//     let age = document.createElement("div");
//     title.classList.add("item-age");
//     title.innerText = item.age;

//     item_element.appendChild(age);

//     list.appendChild(item_element);
//   }
// }
// displayList(list_items);
console.log(list_items);
