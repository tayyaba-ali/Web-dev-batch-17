const greet = () => alert("hello");

const increase = (e) => {
  console.log(e.target);
  e.target.style.backgroundColor = "red";
  e.target.style.color = "white";
};

const out = (e) => {
  console.log(e.target);
  e.target.style.backgroundColor = "blue";
  e.target.style.color = "white";
};
const borderChange = (e) => {
  console.log(e.target);
  e.target.style.border = "none";
  e.target.style.outline = "none";
  e.target.style.border = "2px solid green";
  e.target.style.color = "white";
};
const abc = (e) => {
  console.log(e.target);
  e.target.style.border = "none";
  e.target.style.outline = "none";
  e.target.style.border = "2px solid red";
  e.target.style.backgroundColor = "purple";
  e.target.style.color = "white";
};

const keyDown = (event) => {
  console.log(event.key);
};

let current = 10;
const move = (event) => {
  console.log(event.key);
  if (event.key === "d") {
    let image = document.getElementById("img");
    //  "10px" + "10px"

    current += 10;
    image.style.marginLeft = current + "px";
  }
   else  if (event.key === "a") {
    let image = document.getElementById("img");
    //  "10px" + "10px"

    current -= 10;
    image.style.marginLeft = current + "px";
  }
};
