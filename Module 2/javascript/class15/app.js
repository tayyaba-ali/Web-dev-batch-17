// let future = new Date("2026 june 26 ")

// console.log(future);

// functions

// function getTime(){
//     let today = new Date()
//     // let todayTime = today.getTime()/(1000*60*60)
//     console.log(today.getHours());

// }

// getTime()
// getTime()
// getTime()
// getTime()
// getTime()

// let useName = "Tayyaba"

// // paramaters
// function greet(userName){
//     document.write(`Hello ${userName}`)
// }

// greet("Muneeza","Fatima")  //arguments

// Sum of numbers

// let num1 = Number(prompt("Enter first number"))
// let num2 = Number(prompt("Enter second number"))

// function sum(number1,number2){
//   document.write(number1+number2)
// }

// sum(num1,num2)

// DOM document Object Model

// function sum(){
//     let firstNumber = Number(document.getElementById("firstNum").value)
//     let secondNumber =Number( document.getElementById("secondNum").value)

//     let total = firstNumber+ secondNumber

//          let result =  document.getElementById("result")

//          result.innerText = `The sum is ${total}`
//     // document.write()

// }

// program for lower case

function lowercase() {
  let userText = document.getElementById("userText").value.toLowerCase();
  let result = document.getElementById("output");

  result.innerHTML = `<strong>${userText}</strong>`;
}

// program for upper case

function uppercase() {
  let userText = document.getElementById("userText").value.toUpperCase();
  let result = document.getElementById("output");

  result.innerHTML = `<strong>${userText}</strong>`;
}

// program for  capitilize

function capitilize() {
  let userText = document.getElementById("userText").value;

  let arr = userText.split(" ");
  console.log(arr);
  
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
  }

  
  let final = resultArr.join(" ");
  
  let result = document.getElementById("output");

  result.innerHTML = `<strong>${final}</strong>`;
}


// program for bold

function bold() {
  let userText = document.getElementById("userText").value;
  let result = document.getElementById("output");

  result.innerHTML = `<strong>${userText}</strong>`;
}


// program for italic

function italic() {
  let userText = document.getElementById("userText").value;
  let result = document.getElementById("output");

  result.innerHTML = `<em>${userText}</em>`;
}
