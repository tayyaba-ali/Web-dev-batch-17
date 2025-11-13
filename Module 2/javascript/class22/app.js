// console.log(window.location.pathname); //global object

// const student1 = {
//   studentName: "Tayyaba",
//   rollNo: 89,

//   hobbies: ["scrolling", "sleeping", "tanesunying"],
// };

// // nullish / optional
// console.log(student1?.address?.city);

// window.alert("hello")

// trying to change the page

// let btn = document.getElementById("change");
// btn.addEventListener("click", () => {
//   //   window.location.href = `http://127.0.0.1:5500/pages/contact.html`;

//   // window.location.assign(`http://127.0.0.1:5500/pages/contact.html`)

//   document.write(`<p>loremhfdsaohfdsaohfdsaohfdsaohfdsa</p>`);
//   setTimeout(() => {
//     // window.location.reload(false);

//     let test = window.open(
//       "./pages/contact.html",
//       "quiz app",
//       "width=420,height=380"
//     );
//     if (!test) {
//       alert("Barae meherbani mujhe unblock krden ");
//     } else {
//       console.log(
//         window.open("./pages/contact.html", "quiz app", "width=420,height=380")
//       );
//     }
//   }, 5000);
// });

// regex // regular expressions

// let userKajawab = prompt("enter your cnic")

// let cnicRegex = /^([0-9]{5})\-([0-9]{7})\-([0-9]{1})$/;

// console.log(cnicRegex.match(userKajawab));

// most important
// try catch

try {
  var greeting = "Hello world!";
  alert(greeting);
} catch (error) {
  console.log(error.message);
  throw "syntax mistake mare ha"
}
finally{
    console.log("chlega he chlega");
    
}

console.log("chlte jao");
