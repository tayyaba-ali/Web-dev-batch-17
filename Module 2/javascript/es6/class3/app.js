// primitive

// string
// number
// undefined
// null
// Boolean
// BigInt
// Symbol

// non primitive / reference data type

// arrays
// objects
// functions

// let num = 4;
// let num2 = num;

// console.log(num);
// console.log(num2);

// num++;
// // num = num+1

// console.log("after incrementing to num");

// console.log(num);
// console.log(num2);

// const arr1 = ["item1", "item2", "item3"];
// const arr3 = ["item4", "item5", "item6"];
// // const arr2 = [].concat(arr1);
// // const arr2 = arr1.slice(0);
// const arr2 = [...arr1, ...arr3];
// console.log(arr2);

// console.log(arr1 === arr2);

// console.log("arr1",arr1);
// console.log("arr2",arr2);

// arr2.push("item4")

// console.log("after pushing element to array2 ");

// console.log("arr1",arr1);
// console.log("arr2",arr2);

const person = {
  name: "Tayyaba",
  couse: "web",
  city: "karachi",
};

// console.log(person.hasOwnProperty("entries"));

// const person2 = {...person}
// console.log(person=== person2);
// console.log(person);

// prototype

// function hello() {
//   console.log("hello kese haal chaal hain");
// }

// console.log(hello.name);

// hello.ourCourse = "web"

// hello.prototype.city = "karachi"
// console.log(hello.prototype);

// function ====> function + object

// const arr = [2,2,3,4]
// // arr.push
// console.log(Object.getPrototypeOf(arr));

// Map data structure

// ---strings / symbols
// const person3 = {
//   name: "Tayyaba",
//   course: "web",
//   1: "one ",
// };

// for (let key in person3) {
//   console.log(typeof key);
// }

const person3 = new Map([
  ["name", "Tayyaba"],
  [1, "one"],
]);

// person3.set("zoo", "Tayyaba");
// person3.set("name", "Tayyaba");
// person3.set(1, "one");
// person3.set(["item1","item2"], "one");

// console.log(person3);

// console.log(person3.get("1"));

// for (let [key,value] of person3) {
//   console.log(Array.isArray(key));
// }

// console.log(person3);

// Iterators and generatos

// Iterators ---- Arrays
// Generators -----> function

// const numbers = [1,2,3,4]

// const itera = numbers[Symbol.iterator]()

// // itera.

// console.log(itera.next());
// console.log(itera.next());
// console.log(itera.next());
// console.log(itera.next());
// console.log(itera.next());

// function* hello() {
//   yield  "one";
//   console.log("two");
//   yield console.log("three");
// }

// const hi = hello();
// console.log(hi.next());
// console.log(hi.next());
// console.log(hi.next());
// console.log(hi.next());
// console.log(hi.next());

// Higher Order function

function outerFunc(callback) {
  console.log("ye outer ha ");
  callback();
  return function innerMost() {
    console.log("ye inner most func ha ");
  }
}

function innerFunc() {
  console.log("ye inner func ha");
}

console.log(outerFunc(innerFunc)() );
//as argument agr wo func ho

// callback
