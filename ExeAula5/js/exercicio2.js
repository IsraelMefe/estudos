document.querySelector('#btn2').addEventListener('click', function(){
    const n = parseInt(document.querySelector('#num2').value);
    const saida = document.querySelector('#saida2');

    if (Number.isNaN(n)) {
        saida.value = 'Digite um inteiro.';
        return;
    }

    saida.value = (n % 2 === 0) ? 'Par' : 'Ímpar';
});
