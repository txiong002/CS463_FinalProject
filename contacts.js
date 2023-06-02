const body = document.body;
body.style.width = "100%";
body.style.minHeight = "100vh";

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

  let radioButton = document.getElementsByName("altContact");
  let selectedButton;

  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      selectedButton = radioButton[i];
      break;
    }
  }
  if (selectedButton) {
    let altContact = selectedButton.getAttribute("id");
    console.log("Alternative Contact: ", altContact);
  } else {
    alert("Please select an Alternative Contact");
  }
});
