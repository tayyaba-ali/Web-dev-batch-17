// // let userName = "Tayyaba"

// // function sum(a,b){ //paramaters
// //    console.log(a+b);
// //    console.log(userName);
// //    let localVar = "xyz"
// //    console.log(localVar);

// // }

// // sum(4,8) //arguments
// // //scope
// // // global vs local

// // // console.log(localVar);

// // if(true){
// //     let anotherVar = "abc"
// // }

// // console.log(anotherVar);

// // function declaration
// // function multiply(num1,num2){
// //      var result = num1*num2
// //     return result

// // }

// // let product = multiply(2,5)
// // console.log(product);

// // function expression

// // let multiply = function(num1,num2){
// //   var result = num1*num2
// //     return result
// // }

// // let product = multiply(3,4)
// // console.log(product);

// // arrow function / lamba function / flat function

// // let multiply = (num1,num2)=> num1*num2

// // let product = multiply(3,4)
// // console.log(product);

// // function add(a,b) {
// //   return a + b;
// // }
// // let result = add(7,8)
// // console.log(result);

// //9
// // expression

// // let add = function(a,b){
// //     return a+b
// // }

// // console.log(add(5,8));

// // // arrow

// // let add = (a, b) =>  a + b;

// // console.log(add(5, 7));

// function greet(name) {
//   console.log("Hello, " + name);
// }

// // expression

// let greet = function (name) {
//   console.log("Hello, " + name);
// };
// // arrow
// let greet = (name) => console.log("Hello, " + name);

// function isEven(num) {
//   return num % 2 === 0;
// }

// //expression

// let isEven = function (num) {
//   return num % 2 === 0;
// };

// // arrow

// let isEven = (num) => num % 2 === 0;

// function square(x) {
//   return x * x;
// }

// //expression

// let square = function (x) {
//   return x * x;
// };
// // arrow

// let square =  x=> x * x;

// function multiply(x, y) {
//   return x * y;
// }

// function sayHi() {
//   return "Hi!";
// }

// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// function isAdult(age) {
//   return age >= 18;
// }

// function logMessage(message) {
//   console.log(message);
// }

// switch
let day = 5;

// if(age>=18){
// // }
// switch (day) {
//   // ===
//   case  "Monday":
//     console.log("Monday ko kaam krna ha");
//     break;
//   case "Tuesday":
//     console.log("Tuesday ko 8 baje uthna ha");
//     break;
//   case "Wednesday":
//     console.log("Assignment bnana ha");
//     break;
//   case "Thursday":
//     console.log("Quiz ha tyare krke ana 100 lana");
//     break;
//   case "Friday":
//     console.log("Namaz ke tyare");
//     break;
//   case "Saturday":
//     console.log("Sunday ka intezar kren");
//     break;
//   case "Sunday":
//     console.log("Sunday is funday");
//     break;

//   default:
//     console.log("Invalid day");
// }

// traditional loop
// when you know the number of iterations
for (let i = 0; i <= 6; i++) {
  console.log(i);
}

// when you don't know the number of iteration


let password = "hello123"
let userGuess = prompt("enter your password")

while(password !== userGuess){
  alert("Your password is wrong")
  userGuess = prompt("enter again correct password")
}

alert("Connected successfully")
