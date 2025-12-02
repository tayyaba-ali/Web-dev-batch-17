// Lexical scope / environment

// var num = 10
// let myVar = "value31";
// function outerFunc(firstName, lastName) {
//   function innerFunc() {
//     console.log(`${firstName} ${lastName}`);
//   }
//   return innerFunc;
// }

// let result = outerFunc("Tayyaba", "ali"); //invoke
// result();

// Hoisting

// console.log(hello);

// var hello =  () =>{
//   console.log("hello");
// };

// console.log(Math.pow(2,3));

// Modules

import { file1 } from "./file1.js";
import abc from "./file3.js";
import { num4 } from "./file3.js";

console.log(file1);

export function greet() {
  console.log("hello");
}

abc();
console.log(num4);
