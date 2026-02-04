const inputTexto = document.querySelector('#texto');
const btnMai = document.querySelector('#btnMaiuscula');
const btnSep = document.querySelector('#btnSeparar');
const saida = document.querySelector('#saida');

btnMai.addEventListener('click', function() {
  const t = inputTexto.value || '';
  saida.innerHTML = t.toUpperCase();
});

btnSep.addEventListener('click', function() {
  const t = inputTexto.value.trim();
  if (!t) { saida.innerHTML = ''; return; }
  const partes = t.split(/\s+/);
  saida.innerHTML = partes.map(p=>p.replace(/&/g,'&amp;').replace(/</g,'&lt;')).join('<br>');
});
