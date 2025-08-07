
// ========== CONFIGURAÇÃO DO CANVAS ==========
const canvas = document.getElementById("gameCanvas");
const ctx    = canvas.getContext("2d");

// ========== STATUS DO JOGADOR ==========
let fome    = 100;
let sede    = 100;
let energia = 100;

const INTERVALO_STATUS = 1000; // ms
const REDUCAO_FOME     = 0.5;
const REDUCAO_SEDE     = 0.7;
const REDUCAO_ENERGIA  = 0.4;

// ========== LOOP PRINCIPAL ==========
function loopJogo() {
  atualizarStatus();
  atualizarJogador();  // de player.js
  desenharCena();
  requestAnimationFrame(loopJogo);
}

// ========== ATUALIZAÇÃO DE STATUS ==========
function atualizarStatus() {
  fome    = Math.max(0, fome    - REDUCAO_FOME);
  sede    = Math.max(0, sede    - REDUCAO_SEDE);
  energia = Math.max(0, energia - REDUCAO_ENERGIA);

  document.getElementById("fome").value = fome;
  document.getElementById("sede").value = sede;
  document.getElementById("energia").value = energia;
  document.getElementById("fome-porcentagem").textContent = `${Math.round(fome)}%`;
  document.getElementById("sede-porcentagem").textContent = `${Math.round(sede)}%`;
  document.getElementById("energia-porcentagem").textContent = `${Math.round(energia)}%`;
}

// ========== DESENHO DA CENA ==========
function desenharCena() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#2f2f2f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  desenharSol(ctx);
  desenharArvores(ctx);
  desenharMontanhas(ctx);
  desenharFruta(ctx);
  desenharFogueira(ctx);
  desenharJogador(ctx);
}

// ========== INICIALIZAÇÃO ==========
window.onload = () => {
  setInterval(atualizarStatus, INTERVALO_STATUS);
  loopJogo();
};
