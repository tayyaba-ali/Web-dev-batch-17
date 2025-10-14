// let str = "90"

// Conversion from strings to numbers
// let parsed = parseFloat(str)

// console.log(parsed);
// console.log(typeof parsed);

// let number = Number(str)
// console.log(number);
// console.log(typeof number);



// Conversion from numbers to string
let str = 90

// console.log(str+" ");
// console.log(typeof (str+" "));

// let stringed = str.toString()
// let stringed1 = String(str)
// console.log(typeof (stringed1));

// 3427432.toString() 
// String(3427432) 

// controlling the lenght of decimal numbers

// let number = 3748934.74743289342

// let fixed = number.toFixed()
// console.log(fixed);


// constructor  (new)


// dates and time

// let today = new Date()
// console.log(typeof today);
// console.log(today.getDay());
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getFullYear());
// console.log(today.getMilliseconds());
// console.log(today.getTime());

//  let userBirthYear = Number(prompt("whats your birth year"))

//  let today = new Date 
//  let currentYear = today.getFullYear()
//  console.log(currentYear);
 
// let age = currentYear - userBirthYear
// document.write(`Your age is ${age}`)

// let today = new Date("2 May 1990")
// console.log(today);

// let currentDay = today.getDay()

// const days = ["Sunday","Mon","Tuesday","Wed","Thurs","Fri","Sat"]

// document.write(days[currentDay])



// Task Ramadan task

let current = new Date()
let ramadan = new Date("17 feb 2026")

// hours 

let currentHours = current.getHours()
let ramadanHours = ramadan.getHours()

console.log(currentHours);
console.log(ramadanHours);

