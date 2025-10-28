// while loops

// let userPass = prompt("Enter your password")

// let actualPass = "123saylani"

// while(userPass !== actualPass){
//     userPass = prompt("Try again")
// }

// alert("Welcome to your account")

// let number = 1;

// while (number <= 10) {
//   console.log(number);
//   number++; //1
// }

// do while

// let number = 11;
// do {
//   console.log(number);
// } while (number <= 1);

const names = ["taYYaba", "aIsha", "marYAM"];

// // for each
names.forEach(function (text, i) {
  console.log(text.toLowerCase(), i);
});

// logic

//     ["tayyaba","aisha","maryam"]

// let arr = []

// function changeToLowerCase(text) {
//     arr.push(text.toLowerCase())
// }

// for(let i = 0;i<names.length;i++){
//     // console.log(names[i]);
//     changeToLowerCase(names[i])

// }

// console.log(arr);

// callback

// function outer(callback) {
//   console.log("bartan dhorheh ha.....");

//   callback();
// }

// function inner() {
//   console.log("we are inside another function");
// }

// outer(inner); //function ke argument me function pass krna
// callback function

// for each tasks

// Use forEach to print all elements of an array.

// const numbers = [1, 2, 34, 5];

// numbers.forEach(function (num) {
//   console.log(num);
// });

// Use forEach to calculate the sum of all numbers in an array.

const numbers = [1, 2, 34, 5];

let total = 0; //42
numbers.forEach(function (num) {
  //    total = total+num
  total += num;
});
console.log(total);

// Use forEach to concatenate all strings in an array into a single string.

const strings = ["We", "love", "javascript"];

let sentence = "";
strings.forEach((text) => (sentence += ` ${text}`));

console.log(sentence);
