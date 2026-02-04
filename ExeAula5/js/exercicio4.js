document.querySelector('#btn4').addEventListener('click', function(){
    const b = Number(document.querySelector('#base4').value);
    const h = Number(document.querySelector('#alt4').value);
    const saida = document.querySelector('#saida4');

    if (Number.isNaN(b) || Number.isNaN(h)) {
        saida.value = 'Informe base e altura.';
        return;
    }

    saida.value = 'Área = ' + (b * h).toFixed(2);
});
