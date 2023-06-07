let body = document.body;
body.style.backgroundColor = "#080808";
body.style.minHeight = "100vh";
body.style.color = "#fefefe";
body.margin = "0rem";
body.overflow = "hidden";

let box = document.getElementsByClassName("container-01");
for (let i = 0; i < box.length; i++) {
  box[i].style.display = "flex";
  box[i].style.flexDirection = "column";
  box[i].style.paddingLeft = "1rem";
  box[i].style.width = "75%";
  box[i].style.marginLeft = "auto";
  box[i].style.marginRight = "auto";
}

let box2 = document.getElementsByClassName("container-02");
for (let i = 0; i < box2.length; i++) {
  box2[i].style.display = "flex";
  box2[i].style.flexDirection = "column";
  box2[i].style.paddingLeft = "1rem";
  box2[i].style.width = "75%";
  box2[i].style.marginLeft = "auto";
  box2[i].style.marginRight = "auto";
}
let image = document.getElementById("images-track");
for (let i = 0; i < image.length; i++) {
  image[i].style.width = "80%";
  image[i].style.marginLeft = "auto";
  image[i].style.marginRight = "auto";
  image[i].style.paddingLeft = "5rem";
}

// loop through all the images to apply effects
let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].style.width = "20vmin";
  images[i].style.height = "20vmim";
  images[i].style.objectFit = "cover";
  images[i].style.objectPosition = "center";
}
