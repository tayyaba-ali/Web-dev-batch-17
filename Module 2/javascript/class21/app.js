// Swal.fire({
//   title: "Task added successfully",
//   icon: "success",
//   draggable: true
// });

// const student1 = {
//   "studentName": "Tayyaba",
//   course: "web",
//   "my city": "karachi",
// };

// console.log(student1["city"]);

// student1["city"] = "lahore"

// // dot notation
// // bracket notation

// delete student1.course
// console.table(student1)

// loops
// const student1 = {
//   studentName: "Tayyaba",
//   course: "web",
//   "my city": "karachi",
// };
// let myName = ["Tayyaba", "Yumna", "Asia"];
// console.log(student1.length);

// 0<undefined
// console.log(0<undefined);


// let arrayFormat = Object.keys(student1)

// for(let i = 0 ;i<arrayFormat.length;i++){
//     console.log(arrayFormat[i]);
    
// }
// console.log(Object.entries(student1));

// const numbers = [1,2,3,4,5]

// const student1 = {
//   "studentName": "Rimsha",
//   course: "web",
//   "my city": "karachi",
//   info : function (){
//     console.log(`My name is ${student1.studentName} and i am living in ${student1["my city"]}`);
//     return "hello"
    
//   }
// };


// console.log(student1.info());

// for in 

// for(let key in student1){
//     console.log(student1[key]);
    
// }


// for in 

// for(let index in numbers){
//     console.log(numbers[index]);
    
// }


// constructors

function Student(name,city,course){
     this.studentName = name,
     this.studentCity = city,
     this.studentCourse = course,
     this.info = function(){
        console.log(`My name is ${this.studentName} and living in ${this.studentCity}`);
        
     }
}


let student1 = new Student("Tayyaba","kiranchi","Web")
student1.info()
// console.log(student1);


console.log(Array.prototype);

