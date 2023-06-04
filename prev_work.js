let body = document.body;
body.style.backgroundColor = "#E0E0E0";
body.style.minHeight = "100vh";

let container01 = document.getElementsByClassName("container-1");
for (let i = 0; i < container01.length; i++) {
  container01[i].style.display = "flex";
}

let picBox = document.getElementById("profilePic");
picBox.style.objectFit = "contain";

let image = document.getElementById("headShot");
image.style.width = "300px";
image.style.borderRadius = "20%";

let nameBox = document.getElementById("name");
nameBox.style.width = "100%";
nameBox.style.textAlign = "center";
nameBox.style.backgroundColor = "teal";
nameBox.style.width = "80%";
nameBox.style.marginLeft = "auto";

let displayName = document.getElementById("yourName");
displayName.style.fontSize = "50px";

let container02 = document.getElementsByClassName("container-2");
for (let i = 0; i < container02.length; i++) {
  container02[i].style.display = "flex";
  container02[i].style.width = "20%";
  container02[i].style.marginRight = "auto";
  container02[i].style.marginTop = "-40rem";
}

let headers = document.getElementsByTagName("h3");
for (let i = 0; i < headers.length; i++) {
  headers[i].style.textAlign = "center";
  headers[i].style.fontSize = "30px";
}

let skills = document.getElementById("skills");
skills.style.border = "2px solid";
skills.style.width = "100%";
skills.style.backgroundColor = "lightgray";

let container03 = document.getElementsByClassName("container-3");
for (let i = 0; i < container03.length; i++) {
  container03[i].style.display = "flex";
  container03[i].style.flexDirection = "column";
  container03[i].style.width = "80%";
  container03[i].style.marginLeft = "auto";
}
let education = document.getElementById("education");

let work = document.getElementById("work-history");

let pTags = document.getElementsByTagName("p");
for (let i = 0; i < pTags.length; i++) {
  pTags[i].style.fontStyle = "italic";
  pTags[i].style.fontWeight = "bold";
}
