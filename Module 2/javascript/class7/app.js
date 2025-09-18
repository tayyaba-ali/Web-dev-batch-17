// let sub1 = prompt("enter your first sub name")
// let sub2 = prompt("enter your second sub name")
// let sub3 = prompt("enter your third sub name")


// let sub1Marks = 100
// let sub2Marks = 100
// let sub3Marks = 100

// let sub1ObtainedMarks = +prompt(`whats your marks in  ${sub1}`)
// let sub2ObtainedMarks = +prompt(`whats your marks in  ${sub2}`)
// let sub3ObtainedMarks = +prompt(`whats your marks in  ${sub3}`)

// let sub1Percent = (sub1ObtainedMarks / sub1Marks) * 100
// let sub2Percent = (sub2ObtainedMarks / sub2Marks) * 100
// let sub3Percent = (sub3ObtainedMarks / sub3Marks) * 100


// // document.write("<table>")

// // document.write("<tr>")
// // document.write("<td>" + sub1 + "</td>")


// // document.write("</tr>")


// // document.write("</tr>")


// document.write(`
//     <table border="1">
//         <tr>
//             <th>
//             Subject</th>
//              <th>
//             Total Marks</th>
//              <th>
//             Obtained Marks</th>
//              <th>
//             Percentage</th>
//         </tr>
//         <tr>
//             <td>${sub1}</td>
//             <td>${sub1Marks}</td>
//             <td>${sub1ObtainedMarks}</td>
//             <td>${sub1Percent}%</td>
//         </tr>
//         <tr>
//             <td></td>
//         </tr>
//         <tr>
//             <td></td>
//         </tr>
//     </table>`)



// let userGender = prompt("Whats your gender") //female
// let userAge = +prompt("Whats your age") //40



// if (userGender == "female") {
//     if(userAge >=18){
//         alert("you are enrolled")
//     }
//     else{
//         alert("you are female but you are under 18 ")
//     }
// }
// else {
//     if(userAge>=18){
//         alert("Only females are allowed")
//     }
//     else{
//         alert("You are totally not allowed")
//     }
// }



// let userFuel = +prompt("remaining fuel")
// if(userFuel<0.25){
//     alert("please refill your fuel")
// }






// false    &&    15>=18
// false    &&    false
// // false
// if (userGender === "female" && userAge >= 18) {
//     alert("you are enrolled")
// }

// else if (userGender !== "female" && userAge <= 18) {
//     alert("you are male and under 18")
// }
// else if (userGender !== "female" && userAge >= 18) {
//     alert("Only females are allowed")
// }


// else if (userGender == "female" && userAge <= 18) {
//     alert("You are under 18")
// }
// else {
//     alert("you are not allowed");

// }


// calculator


// let num1 = +prompt("write your first number")
// let num2 = +prompt("write your second number")
// let operator = prompt("what you wanna operate")

// if(operator === "+"){
//     alert(num1+num2)
// }
// else if(operator === "-"){
//     alert(num1-num2)
// }
// else if(operator === "*"){
//     alert(num1*num2)
// }
// else if(operator === "/"){
//     alert(num1/num2)
// }
// else if (operator == "%"){

//     alert(num1%num2)
// }
// else{
//     alert("something went wrong")
// }


// Arrays

// const studentNames = ["Fatima","Zobaida","Sadia",12]
// // index number
// //                    0         1         2     3   4    5     6        


// studentNames = "Tayyaba"
// console.log(studentNames);

// console.log(studentNames);
// // alert(studentNames)
// document.write(studentNames)


// accesssing values

// // 12  = 15 
// studentNames[3]  = 15
// studentNames[2] = true

// console.log(studentNames[0], studentNames[1]);

// console.log(studentNames);


// let myName;

// console.log(typeof myName);


let a = 2
let b = 1
console.log(--a);
console.log(--a - --b);
console.log(--a - --b + ++b);
console.log(--a - --b + ++b+b--);
