// // variable scoping
// // var let const

// // redeclaration
// var myName = "Tayyaba";

// var myName = "Sana";

// // reassignment
// myName = "Madiha";
// console.log(myName);

// // let

// let number;
// let number34 = 3434;

// // number = 364564;
// console.log(Array.isArray({rollNo : 341}));

// // const

// const pi = 4545;

// // const pi = 32432432
// // pi = 544

// pi = 464564;
// console.log(pi);

// scoping

// var is function scope
// function todayTemp() {
//   var temperature = 14;
// }
// console.log(temperature);

// todayTemp();

// if(true){
//     var color = "red"
// }
// console.log(color);

// Template literals

// let firstName = "Tayyaba"
// let lastName = "ali"

// console.log(`My name is ${firstName} ${lastName} and i am teaching web development`);

// Destructuring in arrays

// const colors = ["red", ["green", "yellow"], "blue"];

// let [color1, [colorNested1, colorNested2], color3] = colors;

// color1 = "purple";

// // let color1 = colors[0]
// // let color2 = colors[1]
// // let color3 = colors[2]

// console.log(color1);
// console.log(colorNested1);
// console.log(colorNested2);
// console.log(color3);

//  Destructuring in objects

// const student1 = {
//   name: "Tayyaba",
//   class: "web",
//   city: "kiranchi",
//   hobbies: ["sleeping", "scrolling", "tanesunying"],
//   address: {
//     streentNo: "phalana",
//     zipcode: 564564,
//   },
// };

// // let studentName = student1.name
// // let studentClass = student1["class"]

// let {
//   name,
//   city,
//   hobbies: [hobby1, hobby2, hobby3],
//   address: {streentNo,zipcode},
// } = student1;
// // console.log(address);
// console.log(name);
// console.log(city);
// console.log(hobby1);
// console.log(hobby2);
// console.log(hobby3);
// console.log(streentNo);
// console.log(zipcode);

// // console.log(studentName);
// // console.log(studentClass);

// this keyword

// console.log(window === this);

// var color = "red";

// const student1 = {
//   name: "Tayyaba",
//   class: "web",
//   info:  () =>{
//     console.log(this.class);
//   },
// };

// student1.info();

// default destructuring

// function sum([num1,num2], {name}) {
//   // parameters
//   console.log(num1,num2);
//   console.log(name);

// }

// sum([1,5], {name :"Tayyaba"}); //arguments

// default paramates
// function sum(num1, num2 = 5) {
//   // parameters
//   //   console.log(num1);
//   //   console.log(num2);
//   //  1 + undefined
//   console.log(num1 + num2);
// }

// sum(1,4); //arguments

// array of objects

// const students = [
//   { studentName: "Zubaida", studentClass: "graphic" },
//   { studentName: "Fatima", studentClass: "AI" },
//   { studentName: "Samavia", studentClass: "web", city: ["karachi","lahore"]},
// ];

// let [{studentName}, {studentClass}, {city: [city1,city2]}] = students;
// console.log(studentName);
// console.log(studentClass);
// console.log(city1);
// console.log(student2);
// console.log(student3);

// for (let student of students) {
//   console.log(student.class);
// }
// let nums = [10,20,30]
// let doubled = nums.map((num)=>{
//     return num  + 5

// })
// console.log(doubled);
// console.log(nums)

// let myName = ["saba", "sana", "ajwa"]
// let newArr =myName.map((name) => {
//     return name + " khan"
// })
// console.log(newArr);
// console.log(myName);



const user ={
    firstName : "yumna ",
    address:{
        city :"karachi"
    }
}
document.write(user.address.city)
document.write(user.contact?.phone)
// ?: or ?.

