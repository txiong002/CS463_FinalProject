let body = document.body;
body.style.backgroundColor = "#080808";
//body.style.width = "100%";
body.style.minHeight = "100vh";
body.style.color = "#fefefe";
body.margin = "0rem";
body.overflow = "hidden";

let box = document.getElementsByClassName("container-01");
for (let i = 0; i < box.length; i++) {
  box[i].style.display = "flex";
  box[i].style.border = "1px solid #fefefe";
  box[i].style.flexDirection = "column";
  box[i].style.paddingLeft = "1rem";
}

// loop through all the images to apply effects
let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].style.width = "40vmin";
  images[i].style.height = "40vmim";
  images[i].style.objectFit = "cover";
  images[i].style.objectPosition = "center";
}

const imageTrack = document.getElementById("images-track");
imageTrack.style.display = "flex";
imageTrack.style.gap = "4vmin";
imageTrack.style.position = "absolute";
imageTrack.style.left = "50%";
imageTrack.style.top = "50%";
imageTrack.style.transform = "translate(0%, -50%)";
imageTrack.style.marginTop = "10rem";

// Code (28-79) below is from https://codepen.io/Hyperplexed/full/MWXBRBp
// It allows the images to be scrolled accross the screen
const track = document.getElementById("images-track");

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

/* -- Had to add extra lines for touch events -- */

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);
