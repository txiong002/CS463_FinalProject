let body = document.body;
body.style.backgroundColor = "teal";
body.style.listStyle.backgroundColor = "none";

let myName = document.getElementById("firstName");
myName.style.fontSize = "50px";
myName.style.textAlign = "center";
myName.style.marginTop = "-3rem";

let header = document.getElementsByTagName("h2");
for (let i = 0; i < header.length; i++) {
  header[i].style.textAlign = "center";
}

let list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  list[i].style.listStyle = "none";
}

let school = document.getElementsByClassName("school_info");
for (let i = 0; i < school.length; i++) {
  school[i].style.textAlign = "center";
  school[i].style.marginTop = "-2.68rem";
}

let job = document.getElementsByClassName("job_info");
for (let i = 0; i < job.length; i++) {
  job[i].style.textAlign = "center";
  job[i].style.marginTop = "-2.68rem";
}
