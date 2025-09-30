// // data store
// let studentsName = ["sara" ,"sana" ,"saima" , "saba"]

// let search = prompt("search by name")

// let found = false;

// for(let i= 0 ; i< studentsName.length; i++){
//     if (studentsName[i] === search){
//         found = true ;
//         break ;
//     }
// }
// console.log (found ? "students found" : "students not found");

// // second example ;

// var cleanestCities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// var cityToCheck = prompt("Enter the name of your city");
// var matchFound = false;

// for (var i = 0; i < cleanestCities.length; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     break;
//   }
// }
// if (matchFound) {
//   console.log("It's one of the cleanest cities!");
// } else {
//   console.log("It's not on the list.");
// }

// assignment questions

// let userNum = +prompt("which table you wanna print");
// let tableLength = + prompt("kitne baar chalana ha")
// for (let i = 1; i <= tableLength; i++) {
//   document.write(`${userNum} x ${i} = ${userNum*i} `+ "<br />")
//   // document.write
// }

// 2 X  1  = 1*2 = 2
// 2 X  2  = 2*2 = 4

const numbers = [105, 74, 122, 1, 90];
let largestNum = numbers[0]; //74

for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
  if (numbers[i] > largestNum) {
    //74>5
    largestNum = numbers[i];
  }
}
console.log(largestNum);

// question # 02

const arr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i]+"<br />");

}
