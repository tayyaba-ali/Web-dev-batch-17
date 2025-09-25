// initialization ; condition; updation (increment/decrement)
// iteration

// infinity
// for(let i = 1;i>0;i++){
//     // console.log("Tayyaba");
//     console.log(i);
//     document.write(`${i} <br />`)

// }
// console.log("loop ke bahr");

// 0<=5
// 1<=5

// console.log
// 0
// 1
// 2
// 3
// 4
// 5

// for(let i = 5; i>=1;i--){
//     console.log(i);

// }

// even numbers

// for(let i = 10;i>=1;i--){

//     if(i%2===0){
//         console.log(i);

//     }

// }

// const cities = ["karachi","lahore","isb","peshawar","quetta"]  //5>5

// 0 < 3
// 1 < 3
// 2<3
// // 3<3
// for(let i = 0;i<cities.length;i++){
// //   document.write(cities[i]) // karachi
// //   // lahore
// //   //isb
// //   document.write("<br />")

// if(cities[i]==="peshawar"){
//     document.write(cities[i])
// }
// }

// document.write(cities[0])
// document.write("<br />")
// document.write(cities[1])
// document.write("<br />")
// document.write(cities[2])
// document.write("<br />")
// document.write(cities[3])
// document.write("<br />")
// document.write(cities[4])
// document.write("<br />")

// Task

const cities = ["karachi", "lahore", "isb", "peshawar", "quetta"];
let userCity = prompt("Where do you live");

let flag = false;
for (let i = 0; i < cities.length; i++) {
  // console.log(cities[i]);
  //   if (userCity === cities[i]) {
  //     alert("welcome");
  //     break;
  //   } else {
  //     alert("karachi ajao");
  //   }
  if (userCity === cities[i]) {
    flag = true;
  }
}

if(flag){
    alert("Welcome")
}
else{
    alert("karachi ajao")
}