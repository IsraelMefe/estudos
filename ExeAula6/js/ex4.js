const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    display.value += btn.getAttribute('data-val');
  });
});

document.querySelector('#btnClear').addEventListener('click', function() {
  display.value = '';
});

document.querySelector('#btnEquals').addEventListener('click', function() {
  try {
    display.value = String(eval(display.value || '0'));
  } catch {
    display.value = 'Erro';
  }
});

document.querySelector('#powBtn').addEventListener('click', function() {
  const x = Number(prompt('Base:'));
  const y = Number(prompt('Expoente:'));
  if (isNaN(x) || isNaN(y)) return;
  display.value = String(Math.pow(x,y));
});

document.querySelector('#roundBtn').addEventListener('click', function() {
  const v = Number(prompt('Número:'));
  if (isNaN(v)) return;
  display.value = String(Math.round(v));
});

document.querySelector('#sqrtBtn').addEventListener('click', function() {
  const v = Number(prompt('Número:'));
  if (isNaN(v) || v<0) return;
  display.value = String(Math.sqrt(v));
});
