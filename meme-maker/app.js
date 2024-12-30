const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

/* arms */
ctx.fillRect(200, 200, 20, 100);
ctx.fillRect(340, 200, 20, 100);

/* body */
ctx.fillRect(250, 200, 60, 150);

/* head */
ctx.moveTo(320, 150);
ctx.arc(280, 150, 40, 0, Math.PI * 2);
ctx.fill();

/* eyes */
ctx.beginPath();
ctx.moveTo(268, 140);
ctx.arc(260, 140, 8, 0, Math.PI * 2);
ctx.moveTo(308, 140);
ctx.arc(300, 140, 8, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();

/* mouth */
ctx.beginPath();
ctx.moveTo(290, 160);
ctx.arc(280, 160, 10, 0, Math.PI);
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.stroke();

/* legs */
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(250, 350, 20, 100);
ctx.fillRect(290, 350, 20, 100);
