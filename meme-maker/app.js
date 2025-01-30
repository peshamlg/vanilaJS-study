const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const color = document.querySelector("#color");
const colorOptions = document.querySelectorAll(".color-option");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
ctx.strokeStyle = color.value;
ctx.fillStyle = color.value;

let isDrawing = false;

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

canvas.addEventListener("mousemove", drawingLine);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((colorOption) => {
  colorOption.addEventListener("click", onColorOptionClick);
});
