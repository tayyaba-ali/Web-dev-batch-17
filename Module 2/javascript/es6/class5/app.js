// class Vehicle {
//   constructor(vehicleName, color) {
//     console.log("constructor called");
//     this.name = vehicleName;
//     this.color = color;
//   }
//   sayHello() {
//     console.log("hello");
//   }
// }

// let vehicle1 = new Vehicle("bike","red")
// console.log(vehicle1);
// vehicle1.sayHello()

// class Student {
//   constructor(studentName, course, city) {
//     this.studentName = studentName;
//     this.studentCourse = course;
//     this.studentCity = city;
//   }
//   info() {
//     console.log(
//       `Student name is ${this.studentName} \n student course is ${this.studentCourse} \n student city  is ${this.studentCity}`
//     );
//   }
// }

// class Person  extends Student{
//    constructor(stdName , stdCourse,stdCity){
//     super(stdName,stdCourse);
//     this.city = stdCity
//    }

// }

// const student1 = new Student("Tayyaba","web","karachi")
// console.log(student1);
// student1.info()

// const person1 = new Person("Zubaida","graphic","lahore")
// console.log(person1);

// console.log("script script ");

// setTimeout(()=>{
//     console.log("inside setTimeout");

// })
// console.log("script end");

// Synchronous vs asynchronous

// synchronous single threaded

// console.log("script starts");
// for (let i = 0; i < 100; i++) {
//   console.log("running");
// }

// setTimeout(() => {
//   console.log("inside settimeout func");
// }, 2000);

// let id = setInterval(() => {
//   console.log("inside set interval  func");
// }, 2000);

// console.log(id);

// setTimeout(() => {
//   clearInterval(id);
// }, 5000);

// console.log("script ends");

// console.log("script starts");

// setTimeout(() => {
//   console.log("inside set timeout function ");
// }, 0);

// for (let i = 0; i < 1000; i++) {
//   console.log("chlte jao");
// }
// console.log("script ends");

// }

// Promise

// console.log("script starts ");

// const kitchen = ["chawal", "pani", "gosht", "masale"];

// const result = new Promise((resolve, reject) => {
//   if (
//     kitchen.includes("rice") &&
//     kitchen.includes("pani") &&
//     kitchen.includes("gosht") &&
//     kitchen.includes("masale")
//   ) {
//     resolve("biryaanii khalo ");
//   } else {
//     reject("thengaaaa ");
//   }
// });

// // consume

// result.then((value) => {
//   console.log(value);
// });

// result.catch((err) => {
//   console.log(err);
//   throw "biryani nh milskte";
// });
// setTimeout(() => {
//   console.log("hi from set timeout");
// }, 3000);
// for (let i = 0; i < 2000; i++) {
//   console.log("running");
// }
// console.log("script ends");

// API (application programming interface)

// JSON ( javascript object notation )

// const person = '{"name":"John", "age":30, "city":"New York"}'

// const jsonobj = JSON.parse(person)
// console.log(typeof  jsonobj);

// calling a api

let url = "https://dummyjson.com/posts";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.posts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getData() {
  const { posts } = await fetch(url).then((res) => res.json());
  //   const final = await data.json();
  console.log(posts);
}

getData();
