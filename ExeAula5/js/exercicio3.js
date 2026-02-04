document.querySelector('#btn3').addEventListener('click', function(){
    const a = Number(document.querySelector('#a3').value);
    const b = Number(document.querySelector('#b3').value);
    const saida = document.querySelector('#saida3');

    if (a > b) saida.value = 'Maior: ' + a;
    else if (b > a) saida.value = 'Maior: ' + b;
    else saida.value = 'São iguais';
});
