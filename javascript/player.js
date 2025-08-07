
const player = {
  x: 100,
  y: 100,
  largura: 32,
  altura: 48,
  velocidade: 2
};

let estadoBraco = 0;
let contadorPiscar = 0;
let animarPiscar = false;

const teclas = {
  esquerda: false,
  direita:  false,
  cima:     false,
  baixo:    false
};

window.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft" || e.key === "a") teclas.esquerda = true;
  if (e.key === "ArrowRight"|| e.key === "d") teclas.direita  = true;
  if (e.key === "ArrowUp"   || e.key === "w") teclas.cima     = true;
  if (e.key === "ArrowDown" || e.key === "s") teclas.baixo    = true;
});

window.addEventListener("keyup", e => {
  if (e.key === "ArrowLeft" || e.key === "a") teclas.esquerda = false;
  if (e.key === "ArrowRight"|| e.key === "d") teclas.direita  = false;
  if (e.key === "ArrowUp"   || e.key === "w") teclas.cima     = false;
  if (e.key === "ArrowDown" || e.key === "s") teclas.baixo    = false;
});

function atualizarJogador() {
  let movendo = false;

  if (teclas.esquerda) { player.x -= player.velocidade; movendo = true; }
  if (teclas.direita)  { player.x += player.velocidade; movendo = true; }
  if (teclas.cima)     { player.y -= player.velocidade; movendo = true; }
  if (teclas.baixo)    { player.y += player.velocidade; movendo = true; }

  player.x = Math.max(0, Math.min(canvas.width - player.largura, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.altura, player.y));

  if (movendo) estadoBraco = (estadoBraco + 1) % 2;

  contadorPiscar++;
  animarPiscar = contadorPiscar % 120 < 10;
}

function desenharJogador(ctx) {
  const { x, y } = player;

  ctx.fillStyle = "#ffcc33";
  ctx.fillRect(x + 8, y, 16, 12);

  ctx.fillStyle = "#000";
  if (!animarPiscar) {
    ctx.fillRect(x + 11, y + 3, 2, 2);
    ctx.fillRect(x + 19, y + 3, 2, 2);
  } else {
    ctx.fillRect(x + 11, y + 4, 2, 1);
    ctx.fillRect(x + 19, y + 4, 2, 1);
  }

  ctx.fillStyle = "#6d4c41";
  ctx.fillRect(x + 14, y + 8, 4, 1);

  ctx.fillStyle = "#8d6e63";
  ctx.fillRect(x + 6, y + 12, 20, 20);

  ctx.fillStyle = "#ffcc33";
  const offset = estadoBraco === 0 ? 0 : 2;
  ctx.fillRect(x,       y + 12 + offset, 6, 18);
  ctx.fillRect(x + 26,  y + 12 - offset, 6, 18);

  ctx.fillStyle = "#3e2723";
  ctx.fillRect(x + 6,  y + 32, 10, 16);
  ctx.fillRect(x + 16, y + 32, 10, 16);
}
