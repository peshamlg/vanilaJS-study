const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const textColors = {
  "1.jpg": "#ffffff",
  "2.jpg": "#000000",
  "3.jpg": "#ffffff",
  "4.jpg": "#ffffff",
  "5.jpg": "#ffffff",
  "6.jpg": "#ffffff",
};

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.style.color = textColors[chosenImage];

const todoInput = document.querySelector("#todo-input");
const color = textColors[chosenImage];
todoInput.style.setProperty(
  "--placeholder-color",
  color === "#ffffff" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"
);

document.body.appendChild(bgImage);
