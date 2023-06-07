const body = document.body;
body.style.minHeight = "100vh";

let label = document.getElementsByTagName("form");
for (let i = 0; i < label.length; i++) {
  label[i].style.fontWeight = "bold";
  label[i].style.color = "#fefefe";
}

//submit and reset form
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let fullName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  if (fullName === "") {
    alert("Please enter your name");
  }
  if (email === "") {
    alert("Please enter your email address");
  }
  if (phoneNumber === "") {
    alert("Please enter your phone number");
  }
  console.log("Name: ", fullName);
  console.log("Email: ", email);
  console.log("Phone Number: ", phoneNumber);
});

let buttons = document.querySelectorAll("[name = altContact]");
for (let button of Array.from(buttons)) {
  button.addEventListener("change", () => {
    document.body.style.background = button.value;
    console.log("Alt Contact: ", button.value);
  });
}
