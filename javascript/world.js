
function desenharSol(ctx) {
  ctx.beginPath();
  ctx.arc(900, 80, 50, 0, Math.PI * 2);
  ctx.fillStyle = "#ffeb3b";
  ctx.fill();
}

const arvores = [
  { x: 200, y: 300 },
  { x: 500, y: 350 },
  { x: 800, y: 280 }
];

function desenharArvores(ctx) {
  ctx.fillStyle = "#2e7d32";
  arvores.forEach(a => {
    ctx.beginPath();
    ctx.arc(a.x, a.y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#5d4037";
    ctx.fillRect(a.x - 5, a.y + 20, 10, 30);
    ctx.fillStyle = "#2e7d32";
  });
}

function desenharMontanhas(ctx) {
  ctx.fillStyle = "#795548";
  ctx.beginPath();
  ctx.moveTo(600, 400);
  ctx.lineTo(650, 300);
  ctx.lineTo(700, 400);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(700, 400);
  ctx.lineTo(750, 320);
  ctx.lineTo(800, 400);
  ctx.closePath();
  ctx.fill();
}

const fruta = { x: 150, y: 150, raio: 10 };

function desenharFruta(ctx) {
  ctx.fillStyle = "#f44336";
  ctx.beginPath();
  ctx.arc(fruta.x, fruta.y, fruta.raio, 0, Math.PI * 2);
  ctx.fill();
}

const fogueira = { x: 300, y: 300, raio: 15 };

function desenharFogueira(ctx) {
  ctx.fillStyle = "#ff5722";
  ctx.beginPath();
  ctx.arc(fogueira.x, fogueira.y, fogueira.raio, 0, Math.PI * 2);
  ctx.fill();

  const dx = player.x - fogueira.x;
  const dy = player.y - fogueira.y;
  const dist = Math.hypot(dx, dy);

  if (dist < fogueira.raio + 20 && energia < 100) {
    energia = Math.min(100, energia + 0.5);
  }
}
