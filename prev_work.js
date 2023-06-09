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
nameBox.style.color = "#fefefe";

let displayName = document.getElementById("yourName");
displayName.style.fontSize = "50px";

let container02 = document.getElementsByClassName("container-2");
for (let i = 0; i < container02.length; i++) {
  container02[i].style.display = "flex";
  container02[i].style.overFlow = "hidden";
}

let headers = document.getElementsByTagName("h3");
for (let i = 0; i < headers.length; i++) {
  headers[i].style.fontSize = "30px";
}

let skills = document.getElementById("skills");
skills.style.border = "2px solid";
skills.style.backgroundColor = "lightgray";

let container03 = document.getElementsByClassName("container-3");
for (let i = 0; i < container03.length; i++) {
  container03[i].style.display = "flex";
  container03[i].style.flexDirection = "column";
  container03[i].style.width = "80%";
}

let dtTags = document.getElementsByTagName("dt");
for (let i = 0; i < dtTags.length; i++) {
  dtTags[i].style.fontStyle = "italic";
  dtTags[i].style.fontWeight = "bold";
  dtTags[i].style.paddingTop = "1rem";
  dtTags[i].style.paddingBottom = "1rem";
}

let ddTags = document.getElementsByTagName("dd");
for (let i = 0; i < ddTags.length; i++) {
  ddTags[i].style.padding = ".5rem";
}
