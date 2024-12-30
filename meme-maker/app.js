const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/* wall */
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

/* door */
ctx.lineWidth = 3;
ctx.strokeRect(300, 300, 50, 100);

/* celling */
ctx.fillRect(200, 200, 250, 30);

/* roof */
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.lineTo(200, 200);
ctx.fill();
