// console.log(document.querySelector("#heading").hasAttribute("style"));
// console.log(document.querySelector("#heading").getAttribute("id"));
// console.log(document.querySelector("#heading").setAttribute("class","main"));

const student1 = {
  name: "Tayyaba",
  "my class": "Web",
  phoneNumber: 3543434,
  city: "Kiranchi",
  favrtDrink: "peeepssiiii",
};
// dot notation
// bracket notation
// console.log(student1["my class"]);

student1["my class"] = "AI";
console.log(student1.favrtDrink);
// console.log(student1.address);
//"Kiranchi"

console.table(student1);

