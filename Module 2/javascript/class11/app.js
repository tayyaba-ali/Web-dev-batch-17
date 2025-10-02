// for(let i = 5;i<=10;i=i+5){
//     console.log(i); //5
//     i++
// }

// i++
// i--
// i = i+2
// i+2

// Nested loops

// i =1
// j=1
// i = 2
// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 2; j++) {
//     console.log(i,j);
//   }
// }

// for(let i = 1; i<=5; i++){
//     let stars = "";
//     for(let j = 1; j<=i; j++){
//         stars += " * ";
//         console.log(stars)

//     }

// }

// i = 1
//  i = 3
// for (let i = 5; i >= 1; i--) {
//     //  2
//   for (let j = 1; j <= i; j= j+2) {
//     document.write("*"); //1 1 1
//   }
//   document.write("<br />")
// }

// for (let i = 1; i <=10; i=i+2) {
//     //  i = 1 
//     // 
//   for (let j = 1; j<=i; j++) {
//     document.write("*")
//   }
//   document.write("<br />")
// }


// Assignment question # 02

// const numbers = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// for(let i = 0;i<numbers.length;i++){
//   for(let j=0;j<numbers[i].length;j++){
//     // numbers[0][1]
//     document.write(numbers[i][j]+" ")
//   }
//   document.write("<br />")
  
// }

// i = 0
// length = 2
const numbers = [[1,2],[2,3,1]]
for(let i = 0 ;i<numbers.length;i++){
  // console.log(numbers[i]);
  // [1,2]
  for(let j = 0 ;j<numbers[i].length;j++){
   document.write(numbers[i][j]);
    
  }
  document.write("<br />")
  
}

// 0<3
// 1<3
// 2<3