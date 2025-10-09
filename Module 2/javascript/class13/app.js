// Task

// i love javascript
// I Love Javascript

// let userStr = prompt("give us sentence");

// let arr = userStr.split(" ");
// // console.log(arr);

// const final = [];

// for (let i = 0; i < arr.length; i++) {
//   final.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
// }

// let capitilize = final.join(" ")
// console.log(capitilize);

// let text = "We are learning javascript  learning  chapter 22 pakistan learning dhdsak  learning"

// i = 0
//  i = 7
// for(let i = 0 ;i<text.length;i++){
//     if(text.slice(i,i+8) === "pakistan"){
//         console.log("the word pakistan is present" , i );

//     }

// }

// console.log(text.lastIndexOf("learning"));

// var text1 = "To be or not to be.";
// var segIndex = text1.lastIndexOf("be");

// console.log(segIndex);

// let text =
//   "We are learning javascript !  learning  chapter 22 pakistan learning dhdsak  learning";

// let newText = text.replace(/learning/g, "solving");
// console.log(newText);

// console.log(text.charAt(1));
// console.log(text[1]);

// let number = 10.0000000001;

// console.log(Math.floor(number));

// Head and tail

let player1Name = prompt("Player1 name")
let player2Name = prompt("Player1 name")

let player1Choice = prompt(`${player1Name} head loge ya tail`) //head
let player2Choice = prompt(`${player2Name} head loge ya tail`) //tail

let random = Math.round(Math.random());

if (random === 1 && player1Choice == "head" ) {
  console.log( `${player1Name} ap jeet gaye`);
} else {
    console.log( `${player2Name} ap jeet  gaye`);
}
