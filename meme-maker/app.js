const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOptions = document.querySelectorAll(".color-option");
const modeBtn = document.querySelector("#mode-btn");
const clearBtn = document.querySelector("#clear-btn");
const eraseBtn = document.querySelector("#erase-btn");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
ctx.strokeStyle = color.value;
ctx.fillStyle = color.value;
ctx.lineCap = "round";

let isDrawing = false;
let isFilling = false;

function drawingLine(event) {
  if (isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startDrawing() {
  isDrawing = true;
}

function stopDrawing() {
  ctx.beginPath();
  isDrawing = false;
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function colorChange(colorValue) {
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onColorChange(event) {
  colorChange(event.target.value);
}

function onColorOptionClick(event) {
  colorChange(event.target.dataset.color);
}

function onModeBtnClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function onClearBtnClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function onEraseBtnClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = () => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "68px 'Press Start 2P'";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

canvas.addEventListener("mousemove", drawingLine);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((colorOption) => {
  colorOption.addEventListener("click", onColorOptionClick);
});
modeBtn.addEventListener("click", onModeBtnClick);
clearBtn.addEventListener("click", onClearBtnClick);
eraseBtn.addEventListener("click", onEraseBtnClick);
fileInput.addEventListener("change", onFileChange);
