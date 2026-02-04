document.querySelector('#btn7').addEventListener('click', function(){
    const h = Number(document.querySelector('#alt7').value);
    const p = Number(document.querySelector('#peso7').value);
    const s = document.querySelector('#sexo7').value;
    const saida = document.querySelector('#saida7');

    if (!h || !p) {
        saida.value = 'Informe altura e peso.';
        return;
    }

    const imc = p / (h * h);
    let cat = '';

    if (s === 'F') {
        if (imc < 19.1) cat = 'Abaixo do peso';
        else if (imc < 25.8) cat = 'Peso normal';
        else if (imc < 27.3) cat = 'Marginalmente acima';
        else if (imc < 32.3) cat = 'Acima do peso ideal';
        else cat = 'Obeso';
    } else {
        if (imc < 20.7) cat = 'Abaixo do peso';
        else if (imc < 26.4) cat = 'Peso normal';
        else if (imc < 27.8) cat = 'Marginalmente acima';
        else if (imc < 31.1) cat = 'Acima do peso ideal';
        else cat = 'Obeso';
    }

    saida.value = `IMC: ${imc.toFixed(2)}\nCategoria: ${cat}`;
});
