// includes

// const fruits = ["orange", "mango", "strawberry", "peach", "cheeko"];

// console.log(fruits.includes("banana"));

// for each

// const fruits = ["orange", "mango", "strawberry", "peach", "cheeko"];

// const arr = [];
// let mazeMazeKefruits = (fruit) => {
//   arr.push(`Maze ka ${fruit}`);
// };

// fruits.forEach(mazeMazeKefruits);
// console.log(arr);

// map
// const fruits = ["orange", "mango", "strawberry", "peach", "cheeko"];

// let mazeMazeKefruits = (fruit) => {
//   console.log(`Maze ka ${fruit}`);
//   return `50 rupee ${fruit}`;
// };

// console.log(fruits.map(mazeMazeKefruits));

// // filter
// const numbers = [3, 4, 56, 6];

// const filteration = numbers.filter((num) => {
//   return num > 4;
// });

// console.log(filteration);

// // some
// const numbers = [3, 4, 54, 6];

// const hanKeNaah = numbers.some((num) => {
//   return num > 55;
// });

// console.log(hanKeNaah);

// // every
// const numbers = [90, 89, 57, 60];

// const hanKeNaah = numbers.every((num) => {
//   return num > 55;
// });

// console.log(hanKeNaah);

// // find
// const numbers = [90, 89, 57, 98];

// const value = numbers.find((num) => {
//   return num > 80;
// });

// console.log(value);

// reducer
// const numbers = [1, 2, 3, 4];

// console.log(
//   numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   },10)
// );

// accumulator        currentValue        total
// 10                    1                    11
// 11                    2                    13
// 13                    3                    16
// 16                    4                    20

// sort

// let studentNames = ["zubaida", "fatima", "kashifa", "Samaviya","Samra", "alveena","abeera"];

// console.log(studentNames.sort());

const numbers = [10, 9, 2, 3, 4];

// [49,57,50,51,52]
// [49,50,51,52,57]
// [10,2,3,4,9]


// 49-57
// -8
console.log(numbers.sort((a,b)=>{
    return  a-b
}));
