// let button = document.getElementById("btn");
// console.log(button);

// let count = 10

// button.addEventListener("click", () => {
//   let heading = document.getElementById("heading");
//   heading.className += " change change1";
//   heading.innerText = `Hello world ${count}`;
// });

// let read = document.getElementById("readMore");

// let lessContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, omnis?";
// let moreContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, delectus id harum veritatis minus quod voluptatibus labore architecto quae fugit obcaecati? Nam magnam, adipisci numquam animi ducimus veniam? Modi, natus.";
// read.addEventListener("click", () => {
//   let paragraph = document.getElementById("para");

//   if (read.innerHTML == "Read more") {
//     paragraph.innerHTML += moreContent;
//     read.innerHTML = "Read less";
//   } else {
//     paragraph.innerHTML = lessContent;
//     read.innerHTML = "Read more";
//   }
// });

// change image

// let changeVehicle = document.getElementById("changeVehicle");
// let picture = document.getElementById("picture");

// picture.addEventListener("mouseover", () => {
//    let path =
//     picture.src === "http://127.0.0.1:5500/images/bike1.jfif"
//       ? "http://127.0.0.1:5500/images/car.jfif"
//       : "http://127.0.0.1:5500/images/bike1.jfif";

//   picture.src = path;
// });

// changeVehicle.addEventListener("click", () => {
//   console.log(picture.src);

//     // if (picture.src === "http://127.0.0.1:5500/images/bike1.jfif") {

//     //   picture.src = "http://127.0.0.1:5500/images/car.jfif";
//     // } else {
//     //   picture.src = "http://127.0.0.1:5500/images/bike1.jfif";
//     // }

//   let path =
//     picture.src === "http://127.0.0.1:5500/images/bike1.jfif"
//       ? "http://127.0.0.1:5500/images/car.jfif"
//       : "http://127.0.0.1:5500/images/bike1.jfif";

//   picture.src = path;
// });

// get elements by tag name

// let btn = document.getElementById("style");
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// btn.addEventListener("click", () => {
//   for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].className = "change";
//   }
// });
// DOM ---> document object model
console.log(document.children[0].children);
