// FILTER METHOD
// let numbers=[1,2,3,4,5,6,7,8,9,10]

// let oddNum=numbers.filter((num)=>{
//     return num%2===1
// })
// console.log(numbers);

// console.log(oddNum);

// let student1=[
//     {
//         name:"fatima",
//         age:20,
//         city:"karachi"
//     },
//       {
//         name:"farwa",
//         age:17,
//         city:"multan"
//     },  {
//         name:"fatima",
//         age:19,
//         city:"lahore"
//     },
// ]

// let minor=student1.filter((rec)=>{
//     return rec.age <18
// })

// console.log(minor);

// find method

// let numbers=[1,3,5,6,7,8,9,10]

// let evenNum=numbers.find((num)=>{
//     return num%2===0
// })
// console.log(numbers);

// console.log(evenNum);


// let student1=[
//     {
//         name:"fatima",
//         age:20,
//         city:"karachi"
//     },
//       {
//         name:"farwa",
//         age:17,
//         city:"multan"
//     },  {
//         name:"fatima",
//         age:16,
//         city:"lahore"
//     },
// ]

// let minor=student1.find((rec)=>{
//     return rec.age <18
// })

// console.log(minor);


//SOME METHOD

//  let numbers=[1,3,5,6,7,8,9,10]

// let greater=numbers.some((num)=>{
//     return num>11
// })
// //console.log(numbers);

// console.log(greater);


//EVERY METHOD

//  let numbers=[1,3,5,6,7,8,9,10]

// let greater=numbers.every((num)=>{
//     return num>8
// })
// //console.log(numbers);

// console.log(greater);


// OPTIONAL CHAINING
// const user = {
//     name : "samavia",
//     age :18,
//     detail: {
//         city:" karachi ",
//         street : "123 main street ",
//     }
// }
// console.log ( user.age.address?.hobby)


// Call back 


// function greeting (name , callback ) {
//     console .log ( `Hey ! ${name}`);
//     callback ( ) ;
// }

// function saygoodbye  ( ) {
//     console .log ( "Goodbye !");
    
// }
 
// greeting ( "john" , saygoodbye )


// Spread operators

// let arr = [1, 2 ,5]
// // let obj ={...arr}
// // console.log(arr);


// function sum (v1, v2, v3){
//     return v1 + v2 + v3
// }

// console.log(sum(...arr));


// let obj = {
//     name: "Fatima",
//     rollnum: 2345,
//     city: "XYZ"
// }

// console.log({...obj, name: "Mehwish", city: "Karachi"});
// console.log({ name: "Mehwish", city: "Karachi", ...obj});



// ...

// function  orderSummary (customerName, orderDate, ...items){
//     console.log("customer:", customerName);
//     console.log("orderDate:",orderDate );
//     console.log(items);
// }
// orderSummary("zubaida","20-11-2025","apple", "mango","peanuts","mehandi")

// let marks = [100,200,150,120]
// let totalMarks = marks.reduce((acc , curr) => {
//     return acc + curr

// },0)
// console.log(totalMarks);
// console.log(marks);

let words =["hello", "world", "from", "js"]
let newArr = words.reduce((acc, word) => {
    return acc + " " + word + " ";
})
console.log(newArr);
console.log(words);





// acc   + curr
// 0 +  100
// 100 + 200
// 300 + 150
// 450 + 120
