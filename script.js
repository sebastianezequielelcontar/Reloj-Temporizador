// ========== Reloj Digital ==========
function actualizarReloj() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();

// ========== Temporizador ==========
let segundos = 0;
let intervalo = null;

function actualizarTemporizador() {
  const min = String(Math.floor(segundos / 60)).padStart(2, '0');
  const seg = String(segundos % 60).padStart(2, '0');
  document.getElementById('temporizador').textContent = `${min}:${seg}`;
}

document.getElementById('iniciar').addEventListener('click', () => {
  if (intervalo) return;
  intervalo = setInterval(() => {
    segundos++;
    actualizarTemporizador();
  }, 1000);
});

document.getElementById('pausar').addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
});

document.getElementById('reiniciar').addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  actualizarTemporizador();
});

actualizarTemporizador();