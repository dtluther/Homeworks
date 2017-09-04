document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('myCanvas');
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(250, 250, 150, 0, 2*Math.PI, true);
  ctx.strokeStyle = 'purple';
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.fillStyle = 'lightblue';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(180, 180);
  ctx.bezierCurveTo(200,220,50,220,210,210);
  ctx.strokeStyle = 'green';
  ctx.lineWidth = 7;
  ctx.fillStyle = 'yellow';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(320, 180);
  ctx.bezierCurveTo(340,220,190,220,350,210);
  // ctx.strokeStyle = 'green';
  // ctx.lineWidth = 7;
  ctx.fillStyle = 'yellow';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(175,325);
  ctx.bezierCurveTo(200, 400, 250, 325, 325, 300);
  ctx.fillStyle = 'yellow';
  ctx.fill();

});
