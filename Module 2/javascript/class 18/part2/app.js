let btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  let userCity = document.getElementById("city").value;
  let zip = document.getElementById("zip");

  switch (userCity.toLowerCase()) {
    case "karachi":
      zip.value = 7052;
      zip.className = "change"
      break;
    case "lahore":
      zip.value = 7062;
      break;
    case "peshawar":
      zip.value = 7072;
      break;
    case "quetta":
      zip.value = 7082;
      break;
      default :
      alert("not a valid city ")
  }
});
