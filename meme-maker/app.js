const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

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

canvas.addEventListener("mousemove", drawingLine);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

lineWidth.addEventListener("change", onLineWidthChange);
